export default class HeaderComponent {
  /**
   * @param {HeaderView} headerView
   */
  constructor(headerView) {
    this._active = false;
    this._headerView = headerView;
    this._headerView.onClickHeader(() => this._handleHeaderClick);
  }

  _handleHeaderClick() {
    console.log('yo');
    this._active = !this._active;

    if (!this._active) {
      this._headerView.highlight();
      return;
    }

    this._headerView.unHighlight();
  }
}
