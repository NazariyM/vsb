class ClickCount {
  constructor(el) {
    this.counter = el

    if (!this.counter) return

    this.plusBtn = this.counter.querySelector('.js-click-count-plus')
    this.minusBtn = this.counter.querySelector('.js-click-count-minus')
    this.display = this.counter.querySelector('.js-click-count-display')

    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    this.minusBtn.addEventListener('click', () => this.displayHandler(-1))
    this.plusBtn.addEventListener('click', () => this.displayHandler(+1))
  }

  displayHandler(number) {
    this.display.value = this.count(number)
  }

  count(val) {
    let value = this.display.value
    let newValue = parseInt(value, 10) + parseInt(val, 10)

    if (newValue < 1) newValue = 1

    return newValue
  }
}

const counters = document.querySelectorAll('.js-click-count')

counters.forEach(counter => new ClickCount(counter))
