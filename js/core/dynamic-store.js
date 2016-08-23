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
}
