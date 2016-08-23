export default function connectComponent(store, selector, Component) {
  return (...args) => {
    const component = Reflect.construct(Component, args);
    subscribeToSelection(store, selector, component);
  }
}

function subscribeToSelection(store, selector, component) {
  let lastState = getPartialState(store, selector);

  store.subscribe(() => {
    const newState = getPartialState(store, selector);

    if (lastState !== newState) {
      component.render(newState);
    }

    lastState = newState;
  });
}

function getPartialState(store, selector) {
  return selector(store.getState());
}
