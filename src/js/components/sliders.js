import Swiper from 'swiper'
import { iOS } from '../dev/helpers'

const popSlider = new Swiper('.js-popular-slider', {
  slidesPerView: 'auto',
  speed: 500,
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    disabledClass: 'is-disabled',
    nextEl: '.popular__list-btn_next',
    prevEl: '.popular__list-btn_prev',
  },
  breakpoints: {
    767: {
      spaceBetween: 7,
    },
    1250: {
      spaceBetween: 12,
    },
    1439: {
      spaceBetween: 20,
    },
  },
})

popSlider.el.addEventListener(
  'mouseenter',
  e => {
    popSlider.autoplay.stop()
  },
  false
)

popSlider.el.addEventListener(
  'mouseleave',
  e => {
    popSlider.autoplay.start()
  },
  false
)

const breakpoint = window.matchMedia('(min-width: 767px)')
let contentSwiper

const breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (contentSwiper !== undefined) contentSwiper.destroy(true, true)
    return
  } else if (breakpoint.matches === false) {
    return initContentSwiper()
  }
}

const initContentSwiper = function() {
  contentSwiper = new Swiper('.js-content-swiper', {
    slidesPerView: 'auto',
    speed: 500,
    navigation: {
      disabledClass: 'is-active',
      nextEl: '.content__nav-btn_next',
      prevEl: '.content__nav-btn_prev',
    },
  })

  if (iOS) {
    const slider = document.querySelector('.js-content-swiper')
    const slides = slider.querySelectorAll('.swiper-slide')

    slides.forEach(slide => {
      slide.classList.add('swiper-no-swiping')
    })
  }
}
breakpoint.addListener(breakpointChecker)

breakpointChecker()
