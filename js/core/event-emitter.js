export default class EventEmitter {
  constructor() {
    this._subscribers = [];
  }

  /**
   * @param {function} handler
   */
  subscribe(handler) {
    this._subscribers = [
      ...this._subscribers,
      handler
    ];
  }

  /**
   * @param {any} data
   */
  publish(data) {
    this._subscribers.forEach((subscriber) => subscriber(data))
  }
}
