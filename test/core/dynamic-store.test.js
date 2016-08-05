import test from 'ava';
import sinon from 'sinon';
import DynamicStore from '../../js/core/dynamic-store';

const testReducer = () => {};
const fakeReducer = () => {};

test.beforeEach((t) => {
  t.context.storeStub = sinon.stub({
    dispatch: () => {},
    replaceReducer: () => {},
    subscribe: () => {},
    getState: () => {}
  });
  t.context.combineReducersStub = sinon.stub();
  t.context.dynamicStore = new DynamicStore(() => t.context.storeStub, t.context.combineReducersStub);
});

test('Register reducer replaces original store reducer with old and new ones.', (t) => {
  const { dynamicStore, storeStub, combineReducersStub } = t.context;

  combineReducersStub.returns(fakeReducer);

  dynamicStore.registerReducer('Test', testReducer);

  t.deepEqual(combineReducersStub.firstCall.args[0], { 'Test': testReducer });
  t.is(storeStub.replaceReducer.firstCall.args[0], fakeReducer);
});

test('Register reducer throws an error when the reducer namespace is already taken.', (t) => {
  const { dynamicStore } = t.context;
  dynamicStore.registerReducer('Test', testReducer);

  t.throws(() => {
    dynamicStore.registerReducer('Test', testReducer);
  }, 'Reducer namespace \'Test\' is already taken.');
});

test('Subscribe to subscribes to specific piece of state.', (t) => {
  const { storeStub, dynamicStore } = t.context;
  const callbackSpy = sinon.spy();

  storeStub.getState.onFirstCall().returns({ nested: { test: true } });
  storeStub.getState.onSecondCall().returns({ nested: { test: false } });

  dynamicStore.subscribeTo('nested.test', callbackSpy);

  storeStub.subscribe.callArg(0);

  t.false(callbackSpy.firstCall.args[0]);
});


test('Get state proxies original store get state.', (t) => {
  const { storeStub, dynamicStore } = t.context;
  storeStub.getState.returns('Test');

  t.is(dynamicStore.getState(), 'Test');
});

test('Dispatch proxies original store dispatch.', (t) => {
  const { storeStub, dynamicStore } = t.context;

  dynamicStore.dispatch({ type: 'Test' });

  t.deepEqual(storeStub.dispatch.firstCall.args[0], { type: 'Test' });
});

test('Subscribe proxies original store subscribe.', (t) => {
  const { storeStub, dynamicStore } = t.context;
  const fakeCallback = () => {};
  const fakeUnsubscribe = () => {};

  storeStub.subscribe.returns(fakeUnsubscribe);

  t.is(dynamicStore.subscribe(fakeCallback), fakeUnsubscribe);
  t.deepEqual(storeStub.subscribe.firstCall.args[0], fakeCallback);
});
