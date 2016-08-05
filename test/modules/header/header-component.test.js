import test from 'ava';
import sinon from 'sinon';
import { jsdom } from 'jsdom';
import { simulate } from '../../dom-test-utils';

import HeaderComponent from '../../../js/modules/header/header-component.js';
import { toggleHeaderHighlight } from '../../../js/modules/header/header-actions';
import DynamicStore from '../../../js/core/dynamic-store';

const testHeaderHtml = '<header class="header"></header>';

test.beforeEach((t) => {
  t.context.storeStub = sinon.createStubInstance(DynamicStore);
  t.context.window = jsdom(testHeaderHtml).defaultView;
  t.context.headerEl = t.context.window.document.querySelector('.header');
  new HeaderComponent(t.context.headerEl, t.context.storeStub);
});

test.afterEach((t) => {
  t.context.window.close();
});

test('When the header is clicked, dispatches the toggle highlight action.', (t) => {
  const { window, headerEl, storeStub } = t.context;

  simulate(window, headerEl, 'click');

  t.deepEqual(storeStub.dispatch.firstCall.args[0], toggleHeaderHighlight());
});

test('When state changes, header is highlighted accordingly.', (t) => {
  const { headerEl, storeStub } = t.context;
  
  storeStub.subscribeTo.callArgWith(1, true);
  t.true(headerEl.classList.contains('is-highlighted'));

  storeStub.subscribeTo.callArgWith(1, false);
  t.false(headerEl.classList.contains('is-highlighted'));
});
