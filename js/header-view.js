export default class HeaderView {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this._el = el;
  }

  highlight() {
    this._el.classList.add('alt-highlight');
  }

  unHighlight() {
    this._el.classList.remove('alt-highlight');
  }

  /**
   * @param {function} cb
   */
  onClickHeader(cb) {
    this._el.addEventListener('click', cb);
  }
}
