import Swiper from 'swiper'

const slider = new Swiper('.js-popular-slider', {
  slidesPerView: 'auto',
  speed: 500,
  // loop: false,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  navigation: {
    disabledClass: 'is-disabled',
    nextEl: '.popular__list-btn_next',
    prevEl: '.popular__list-btn_prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    1250: {
      spaceBetween: 12,
    },
    1439: {
      spaceBetween: 20,
    },
  },
})
