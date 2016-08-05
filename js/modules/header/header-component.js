import { toggleHeaderHighlight } from './header-actions';

const HIGHLIGHTED_CLASSNAME = 'is-highlighted';

export default class HeaderComponent {
  /**
   * @param {Element} el
   * @param {DynamicStore} store
   */
  constructor(el, store) {
    this._el = el;

    el.addEventListener('click', () => store.dispatch(toggleHeaderHighlight()));
    store.subscribeTo('header.highlight', this._toggleHighlight.bind(this));
  }

  /**
   * @private
   */
  _toggleHighlight(highlight) {
    if (!highlight) {
      this._el.classList.remove(HIGHLIGHTED_CLASSNAME);
      return;
    }

    this._el.classList.add(HIGHLIGHTED_CLASSNAME);
  }
}
