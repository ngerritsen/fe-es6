/**
 * @param {Window} window
 * @param {Element} el
 * @param {string} type
 */
export function simulate(window, el, type) {
  const event = window.document.createEvent("HTMLEvents");

  event.initEvent(type, false, true);
  el.dispatchEvent(event);
}
