/* global cb */

import HeaderComponent from './header-component';
import headerReducer from './header-reducer';

cb.store.registerReducer('header', headerReducer);

const headerEl = document.querySelector('.js-header');

new HeaderComponent(headerEl, cb.store);
