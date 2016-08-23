/* global cb */

import ProductsComponent from './products-component';
import SortingComponent from './sorting-component';
import CatalogService from './catalog-service';

const catalogService = new CatalogService(cb);
const sortingEl = document.querySelector('.js-sorting');
const productsEl = document.querySelector('.js-products');

new SortingComponent(sortingEl, catalogService);
new ProductsComponent(productsEl, catalogService);
