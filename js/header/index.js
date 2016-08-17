/* global cb */

import HeaderComponent from './header-component';
import headerReducer from './header-reducer';

cb.store.registerReducer('header', headerReducer);

const headerEl = document.querySelector('.header');

new HeaderComponent(headerEl, cb.store);
