/* global cb */

export default class ProductsComponent {
  constructor(el) {
    this._el = el;
    this._productsEl = el.querySelector('.js-results');
    const loaderEl = this._el.querySelector('.js-loader');

    new cb.shared.InlineLoaderComponent(loaderEl, store, 'catalog.loading');
  }

  render(state) {
    if (state.products) {
      this._productsEl.innerHTML = state.products
    }
  }
}
