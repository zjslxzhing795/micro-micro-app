class CounterElement extends HTMLElement {
  constructor() {
    super()
    this.counter = 0
    const shadowRoot = this.attachShadow({ mode: "open" })
    const styles = `
      #counter-increment{
        width: 60px;
        height: 30px;
        margin:20px;
        background: none;
        border: 1px solid black;
      }
      `
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <h3>Counter</h3>
      <slot id='counter-value'>${this.counter}</slot>
      <button id='counter-increment'>+</button>
      `

    this.incrementButton = this.shadowRoot.querySelector("#counter-increment")
    this.counterValue = this.shadowRoot.querySelector("#counter-value")
    this.incrementButton.addEventListener("click", this.increment.bind(this))
  }
  increment() {
    this.counter++
    this.updateValue()
  }
  updateValue() {
    this.counterValue.innerHTML = this.counter
  }
}
customElements.define("counter-element", CounterElement)
