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
  error: 'is-error',
  fixed: 'is-fixed'
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

export const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

/**
 * Match media device indicator.
 *
 * @type {Boolean}
 */
export class Resp {
  static get currWidth() {
    return window.innerWidth;
  }

  static get isTouch() {
    return 'ontouchstart' in window;
  }

  static get isDesk() {
    return window.matchMedia('(min-width: 1200px)').matches;
  }

  static get isTablet() {
    return window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches;
  }

  static get isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  }

  static get isSmallMobile() {
    return window.matchMedia('(max-width: 374px)').matches;
  }
}
