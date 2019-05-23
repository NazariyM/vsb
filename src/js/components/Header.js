import { throttle, css, Resp } from '../dev/helpers'
import ScrollMagic from 'scrollmagic'

class Header {
  constructor() {
    this.header = document.querySelector('.header')

    if (!this.header) return

    this.body = document.querySelector('body')

    this.init()
  }

  init() {
    this.initFix()
    if (Resp.isMobile) this.fixContentNav()
  }

  initFix() {
    const _this = this
    const toggleHeaderScroll = throttle(() => {
      toggleHeader()
    }, 0)

    function toggleHeader() {
      if (window.pageYOffset > 0) {
        _this.header.classList.add(css.fixed)
      } else {
        _this.header.classList.remove(css.fixed)
      }
    }

    window.addEventListener('scroll', toggleHeaderScroll)
  }

  fixContentNav() {
    const _this = this
    const controller = new ScrollMagic.Controller()
    const nav = document.querySelector('.content__nav')
    const content = document.querySelector('.content__inner-wrap')

    const headerScene = new ScrollMagic.Scene({
      offset: -115,
      triggerElement: content,
      triggerHook: 0,
      duration: content.offsetHeight,
    })

    const navScene = new ScrollMagic.Scene({
      offset: -58,
      triggerElement: content,
      triggerHook: 0,
      duration: content.offsetHeight,
    })

    headerScene.setClassToggle(_this.header, css.hidden)
    navScene.setClassToggle(nav, css.fixed)

    controller.addScene([headerScene, navScene])
  }
}

export default new Header()
