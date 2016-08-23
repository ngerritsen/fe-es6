const HIGHLIGHTED_CLASSNAME = 'header--state-highlighted';

export default class HeaderComponent {
  /**
   * @param {Element} el
   */
  constructor(el,) {
    this._el = el;

    el.addEventListener('click', () => this._toggleHighlight());
  }

  /**
   * @private
   */
  _toggleHighlight() {
    const classList = this._el.classList;

    if (classList.hasClass(HIGHLIGHTED_CLASSNAME)) {
      classList.remove(HIGHLIGHTED_CLASSNAME);
      return;
    }

    classList.add(HIGHLIGHTED_CLASSNAME);
  }
}
