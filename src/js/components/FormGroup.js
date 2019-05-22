import { css } from '../dev/helpers'

class FormGroup {
  constructor(el) {
    this.block = el

    if (!this.block) return

    this.input = this.block.querySelectorAll('input')

    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    const events = ['input', 'keypress', 'blur']

    events.forEach(evt =>
      this.input.forEach(input =>
        input.addEventListener(evt, e => this.checkInput(e))
      )
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

const formGroups = document.querySelectorAll('.js-form-group')

formGroups.forEach(group => new FormGroup(group))
