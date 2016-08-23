/* global cb */

import ProductsComponent from './products-component';
import SortingComponent from './sorting-component';
import catalogReducer from './catalog-reducer';

const { store, connectComponent } = cb;
store.registerReducer('catalog', catalogReducer);

const sortingEl = document.querySelector('.js-sorting');
const productsEl = document.querySelector('.js-products');

new connectComponent(SortingComponent, (state) => state.catalog, store)(sortingEl, store);
new connectComponent(ProductsComponent, (state) => state.catalog, store)(productsEl);
