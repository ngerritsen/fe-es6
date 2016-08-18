export default class DynamicStore {
  /**
   * @param {object} store
   * @param {function} combineReducers
   */
  constructor(store, combineReducers) {
    this._store = store;
    this._combineReducers = combineReducers;
    this._reducers = {};
  }

  /**
   * @param {string} name
   * @param {function} reducer
   */
  registerReducer(name, reducer) {
    if (this._reducers[name]) {
      throw Error(`Reducer namespace '${name}' is already taken.`);
    }

    this._reducers = Object.assign({}, this._reducers, { [name]: reducer });
    this._store.replaceReducer(this._combineReducers(this._reducers));
  }

  /**
   * @param {string} namespace
   * @param {function} handler
   * @returns {function} unsubscribe
   */
  subscribeTo(namespace, handler) {
    const store = this._store;
    const selector = (state) => this._getPropertyByNamespace(namespace, state);
    let previousState = selector(store.getState());

    return this._store.subscribe(() => {
      const newState = selector(store.getState());

      if (newState !== previousState) {
        handler(newState);
      }

      previousState = newState;
    });
  }

  /**
   * @returns {object} state
   */
  getState() {
    return this._store.getState();
  }

  /**
   * @param {object} action
   */
  dispatch(action) {
    return this._store.dispatch(action);
  }

  /**
   * @param {function} handler
   * @returns {function} unsubscribe
   */
  subscribe(handler) {
    return this._store.subscribe(handler);
  }

  /**
   * @param {string} namespace
   * @param {object} object
   * @returns {*}
   * @private
   */
  _getPropertyByNamespace(namespace, object) {
    const keys = namespace.split('.');

    return keys.reduce((result, key) => result[key], object);
  }
}
