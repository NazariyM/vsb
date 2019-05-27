import { css } from '../dev/helpers'
import { FormGroup } from './FormGroup'

class PrintIngreds extends FormGroup {
  constructor() {
    super()

    this.block = document.querySelector('.js-print-ingreds')
    if (!this.block) return

    this.btn = document.querySelector('.js-print-btn')
    this.inner = document.querySelectorAll('.category__content-inner')

    this.bindPrintsEvent()
  }

  bindPrintsEvent() {
    this.btn.addEventListener('click', () => this.btnHandler())
    this.inner.forEach(inner => {
      inner.addEventListener('click', e => this.addItemForPrint(e))
    })
  }

  btnHandler() {
    this.checkItemsToPrint()
  }

  checkItemsToPrint() {
    if (!this.block.children.length) {
      this.btn.classList.add(css.error)
      setTimeout(() => {
        this.btn.classList.remove(css.error)
      }, 2500)
    } else {
      window.print()
    }
  }

  addItemForPrint(e) {
    if (e.target.tagName === 'INPUT') {
      const item = e.target.closest('.category__comp')
      const dataSet = item.dataset.compId

      if (e.target.checked) {

        const cln = item.cloneNode(true)
        this.block.appendChild(cln)
      } else {
        const items = [...this.block.children]

        items.forEach(comp => {
          if (dataSet === comp.dataset.compId) {
            this.block.removeChild(comp);
          }
        })
      }
    }
  }
}

new PrintIngreds()
