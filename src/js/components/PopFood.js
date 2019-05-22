import Swiper from 'swiper';

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
  // breakpoints: {
  //    // when window width is <= 320px
  //    320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //    },
  //    // when window width is <= 480px
  //    480: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //    },
  //    // when window width is <= 640px
  //    640: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //    },
  // },
});
