import { changeSorting } from './catalog-actions'

export default class SortingComponent {
  constructor(el, store) {
    el.addEventListener('change', () => {
      store.dispatch(changeSorting(el.value))
    });
  }
}
