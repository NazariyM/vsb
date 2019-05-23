import ScrollReveal from 'scrollreveal'
import { Resp } from '../dev/helpers'

ScrollReveal().reveal('.header__container', { delay: 300 })
ScrollReveal().reveal('.title_lg', {
  delay: 400,
  distance: '-50px',
  origin: 'right',
})
ScrollReveal().reveal('.popular__list', {
  delay: 550,
  distance: '-50px',
  origin: 'right',
})
ScrollReveal().reveal('.category', {
  delay: 250,
  distance: '-50px',
  origin: 'right',
})

if (!Resp.isSmallMobile)
  ScrollReveal().reveal('.content__aside-block', {
    delay: 250,
    distance: '60px',
  })
