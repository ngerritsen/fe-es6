const HIGHLIGHTED_CLASSNAME = 'is-highlighted';

export default class HeaderComponent {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this._el = el;

    el.addEventListener('click', () => this._toggleHighlight())
  }

  /**
   * @private
   */
  _toggleHighlight() {
    if (this._el.classList.contains(HIGHLIGHTED_CLASSNAME)) {
      this._el.classList.remove(HIGHLIGHTED_CLASSNAME);
      return;
    }

    this._el.classList.add(HIGHLIGHTED_CLASSNAME);
  }
}
