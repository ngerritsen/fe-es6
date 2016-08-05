import test from 'ava';
import sinon from 'sinon';
import { jsdom } from 'jsdom';
import { simulate } from '../../dom-test-utils';

import DynamicStore from '../../../js/core/dynamic-store';
import SortingComponent from '../../../js/modules/catalog/sorting-component';

const testSortingHtml = `
  <select class="product-list--sorting">
    <option value="1">1</option>
    <option value="2" selected>2</option>
  </select>
`;

test('Triggers correct action when sort option is selected', (t) => {
  const storeStub = sinon.createStubInstance(DynamicStore);
  const window = jsdom(testSortingHtml).defaultView;
  const sortingEl = window.document.querySelector('.product-list--sorting');

  new SortingComponent(sortingEl, storeStub);


  simulate(window, sortingEl, 'change');

  t.deepEqual(storeStub.dispatch.firstCall.args[0], '2');
});
