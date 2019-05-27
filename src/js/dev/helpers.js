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
    return window.matchMedia('(max-width: 330px)').matches;
  }
}

export const setClassForEl = (el, className) => {
  [...el.parentElement.children].forEach(sibling => sibling.classList.remove(className));
  el.classList.add(className);
};

export function scrollToSmoothly(pos, time) {
  if (typeof pos !== 'number') {
    pos = parseFloat(pos);
  }
  if (isNaN(pos)) {
    console.warn('Position must be a number or a numeric String.');
    throw 'Position must be a number';
  }
  if (pos < 0 || time < 0) {
    return;
  }
  let currentPos = window.scrollY || window.screenTop;
  let start = null;
  time = time || 500;
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    if (currentPos < pos) {
      let progress = currentTime - start;
      window.scrollTo(
        0,
        ((pos - currentPos) * progress) / time + currentPos
      );
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    } else {
      let progress = currentTime - start;
      window.scrollTo(
        0,
        currentPos - ((currentPos - pos) * progress) / time
      );
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    }
  });
}
