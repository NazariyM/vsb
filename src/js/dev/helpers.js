/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */

export const css = {
  active: 'is-active',
  visible: 'is-visible',
  open: 'is-open',
  hidden: 'is-hidden',
  fill: 'is-filled',
  error: 'is-error'
}

/**
 * Throttle function.
 *
 * @param {Function} fn
 * @param {Number} [threshold]
 * @param {Object} [scope]
 * @return {Function}
 */
export function throttle(fn, threshold = 250, scope) {
  let last, deferTimer

  return function() {
    const context = scope || this

    let now = +new Date(),
      args = arguments
    if (last && now < last + threshold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function() {
        last = now
        fn.apply(context, args)
      }, threshold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
