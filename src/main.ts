import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="counter" type="button">count is 0</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)