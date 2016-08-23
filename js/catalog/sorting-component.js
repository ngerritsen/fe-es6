import { changeSorting } from './catalog-actions'

export default class SortingComponent {
  /**
   * @param {Element} el
   * @param {CatalogService} catalogService
   */
  constructor(el, catalogService) {
    el.addEventListener('change', () => {
      catalogService.changeSorting(el.value)
    });
  }
}
