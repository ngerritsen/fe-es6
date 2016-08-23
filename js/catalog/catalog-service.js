class CatalogService {
  constructor(cb) {
    this._eventEmitter = new cb.EventEmitter();
  }

  changeSorting(value) {
    fetch(`products-${value}.html`)
      .then((res) => res.text())
      .then((products) => {
        setTimeout(() => this._eventEmitter.publish(products), 1000);
      });
  }
}
