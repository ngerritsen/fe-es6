import test from 'ava';
import headerReducer from '../../../js/modules/header/header-reducer';
import { toggleHeaderHighlight } from '../../../js/modules/header/header-actions';

const initialState = {
  highlight: false
};

test('Returns correct initial state', (t) => {
  t.deepEqual(headerReducer(undefined, {}), initialState);
});

test('Toggles header highlight', (t) => {
  t.deepEqual(headerReducer(initialState, toggleHeaderHighlight()), {
    highlight: true
  });

  t.deepEqual(headerReducer({
    highlight: true
  }, toggleHeaderHighlight()), {
    highlight: false
  });
});
