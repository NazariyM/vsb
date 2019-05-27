import { css } from '../dev/helpers'

export class FormGroup {
  constructor() {
    this.group = document.querySelectorAll('.js-form-group')

    if (!this.group) return

    this.input = null

    this.init()
  }

  init() {
    this.getInputs()
    this.bindEvents()
  }

  getInputs() {
    this.group.forEach(block => {
      this.input = block.querySelector('input')
    })
  }

  bindEvents() {
    const events = ['input', 'keypress', 'blur']

    events.forEach(evt =>
      this.input.addEventListener(evt, e => this.checkInput(e))
    )
  }

  checkInput(e) {
    const target = e.target
    const block = target.parentElement

    target.value
      ? block.classList.add(css.fill)
      : block.classList.remove(`${css.fill}`, `${css.error}`)

    if (e.keyCode === 13 && !target.value) block.classList.add(css.error)
  }
}

new FormGroup()
