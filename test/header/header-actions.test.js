import test from 'ava';
import { toggleHeaderHighlight } from '../../../js/header/header-actions';

test('Toggle header highlight returns correct action', (t) => {
  t.deepEqual(toggleHeaderHighlight(), { type: 'TOGGLE_HEADER_HIGHLIGHT' });
});
