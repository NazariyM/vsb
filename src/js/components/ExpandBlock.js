import { css } from '../dev/helpers'

class ExpandBlock {
  constructor(el) {
    this.block = el

    if (!this.block) return

    this.content = this.block.nextElementSibling
    this.initHeight = 0

    this.init()
  }

  init() {
    this.setHeight()
    this.bindEvents()
  }

  bindEvents() {
    this.block.addEventListener('click', () => this.toggleContent())
    this.content.addEventListener(
      'transitionend',
      this.setAutoHeight.bind(this)
    )
  }

  setHeight() {
    this.initHeight = this.content.offsetHeight

    if (this.block.classList.contains(css.open))
      this.content.style.height = 'auto'
    else this.content.style.height = '0px'
  }

  toggleContent() {
    if (this.block.classList.contains(css.open)) {
      this.initHeight = this.content.offsetHeight
      this.content.style.height = `${this.initHeight}px`

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.content.style.height = '0px'
        })
      })
    } else {
      this.content.style.height = `${this.initHeight}px`
    }
    this.block.classList.toggle(css.open)
  }

  setAutoHeight() {
    if (this.block.classList.contains(css.open))
      this.content.style.height = 'auto'
  }
}

const expandBlocks = document.querySelectorAll('.js-expand-block')

expandBlocks.forEach(block => new ExpandBlock(block))
