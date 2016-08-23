export default class InlineLoaderComponent {
  /**
   * @param {Element} el
   * @param {DynamicStore} store
   * @param {string} listenTo
   */
  constructor(el, store, listenTo) {
    this._el = el;
    store.subscribeTo(listenTo, this._toggleLoader.bind(this));
  }

  /**
   * @param {string} loadingState
   * @private
   */
  _toggleLoader(loadingState) {
    if (loadingState) {
      this._el.innerHTML = 'loading...';
      return;
    }

    this._el.innerHTML = '';
  }
}
