/* exports cb */
import { createStore, combineReducers } from 'redux';
import DynamicStore from './core/dynamic-store';

window.cb = {
  store: new DynamicStore(createStore, combineReducers)
};
