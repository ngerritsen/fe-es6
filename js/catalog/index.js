/* global cb */

import ProductsComponent from './products-component';
import SortingComponent from './sorting-component';
import catalogReducer from './catalog-reducer';

cb.store.registerReducer('catalog', catalogReducer);

const sortingEl = document.querySelector('.js-sorting');
const productsEl = document.querySelector('.js-products');

new SortingComponent(sortingEl, cb.store);
new ProductsComponent(productsEl, cb.store);
