import { css, Resp, setClassForEl } from '../dev/helpers'

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
    this.block.addEventListener('click', e => this.toggleContent(e))
    this.content.addEventListener('transitionend', e => {
      this.setAutoHeight.bind(this)
      this.closeSiblings.bind(this)
    })
  }

  setHeight() {
    this.initHeight = this.content.offsetHeight
    this.content.dataset.height = this.initHeight

    if (this.block.classList.contains(css.open))
      this.content.style.height = 'auto'
    else this.content.style.height = '0px'
  }

  toggleContent(e) {
    e.preventDefault()
    const block = e.currentTarget

    if (block.classList.contains(css.open)) {
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
    block.classList.toggle(css.open)

    if (Resp.isMobile) this.closeSiblings(e)
  }

  setAutoHeight() {
    if (this.block.classList.contains(css.open))
      this.content.style.height = 'auto'
  }

  closeSiblings(e) {
    if (!e.currentTarget.closest('.content__col_categories')) return

    const currentItem = e.currentTarget.parentElement
    const siblings = [...currentItem.parentElement.children]

    siblings.find(item => {
      const btn = item.children[0]

      if (
        item !== currentItem &&
        btn.classList.contains(css.open)
      ) {
        const content = item.children[1]

        content.style.height = `${content.dataset.height}px`

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            content.style.height = '0px'
          })
        })

        btn.classList.remove(css.open)
      }
    })

    setClassForEl(e.currentTarget.parentElement, css.open)
  }
}

const expandBlocks = document.querySelectorAll('.js-expand-block')

expandBlocks.forEach(block => new ExpandBlock(block))
