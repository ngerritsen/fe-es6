/* global cb */

export default class ProductsComponent {
  constructor(el, catalogService) {
    this._el = el;
    this._productsEl = el.querySelector('.js-results');

    const loaderEl = this._el.querySelector('.js-loader');
    this._inlineLoader = new cb.shared.InlineLoaderComponent(loaderEl, catalogService);

    catalogService.subscribe('fetching', () => {
      this._inlineLoader.start();
    });

    catalogService.subscribe('fetched', () => {
      this._replaceProducts.bind(this);
      this._inlineLoader.stop();
    });
  }

  _replaceProducts(products) {
    this._productsEl.innerHTML = products;
  }
}
