export default class InlineLoaderComponent {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this._el = el;
  }

  start() {
    this._el.innerHTML = 'loading...';
  }

  stop() {
    this._el.innerHTML = '';
  }
}
