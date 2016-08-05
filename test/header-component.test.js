import test from 'ava';
import { jsdom } from 'jsdom';
import { simulate } from './dom-test-utils';

import HeaderComponent from '../js/header-component.js';

const testHeaderHtml = '<header class="header"></header>';

test.beforeEach((t) => {
  t.context.window = jsdom(testHeaderHtml).defaultView;
  t.context.headerEl = t.context.window.document.querySelector('.header');
  new HeaderComponent(t.context.headerEl);
});

test.afterEach((t) => {
  t.context.window.close();
});

test('Clicking the header toggles it\'s highlighted state', (t) => {
  const { window, headerEl } = t.context;

  simulate(window, headerEl, 'click');
  t.true(headerEl.classList.contains('is-highlighted'));

  simulate(window, headerEl, 'click');
  t.false(headerEl.classList.contains('is-highlighted'));
});
