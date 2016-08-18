export default class ProductsComponent {
  constructor(el, store) {
    this._el = el;
    store.subscribeTo('catalog', this._render.bind(this));
  }

  _render(state) {
    if (state.products) {
      this._el.innerHTML = state.products
    }
  }
}
