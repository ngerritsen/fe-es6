export default class SortingComponent {
  constructor(el, store) {
    el.addEventListener('change', store.dispatch(el.value));
  }
}
