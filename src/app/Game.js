import '../styles/style.css'
import Rocket from './Rocket'
import './Controls'

const render = (el) => {
  const mount = document.querySelector('.game')
  mount.appendChild(el)
}

render(Rocket())