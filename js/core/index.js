/* exports cb */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import DynamicStore from './dynamic-store';
import connectComponent from './connect-component';
import thunk from 'redux-thunk';

const store = createStore((state) => state, applyMiddleware(thunk));

window.cb = {
  store: new DynamicStore(store, combineReducers),
  connectComponent
};
