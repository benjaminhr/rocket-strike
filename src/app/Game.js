import '../styles/style.css'
import './Controls'
import Rocket from './Rocket'
import Meteor from './Meteor'
import anime from 'animejs'
import isInViewPort from './IsInViewPort'
import './Overlap'

const render = (el) => {
  const mount = document.querySelector('.game')
  mount.appendChild(el)
}

setInterval(() => {
  const size = Math.floor(Math.random() * 100) + 50
  const leftPosition = Math.floor(Math.random() * document.body.clientWidth - 100) + 55;

  render(Meteor(size, leftPosition))

  anime({
    targets: '.meteor',
    translateY: 1250,
    // opacity: 0.2,
    duration: 7000,
    loop: false,
    elasticity: 0
  })
}, 2000)

render(Rocket())