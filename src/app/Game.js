import '../styles/style.css'
import './Controls'
import Rocket from './Rocket'
import Meteor from './Meteor'
import anime from 'animejs'
import isInViewPort from './IsInViewPort'
import './Overlap'
import Explosion from './Explosion'

const render = (el) => {
  const mount = document.querySelector('.game')
  mount.appendChild(el)
}

const generateMeteors = setInterval(() => {
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

const checkIfExploded = setInterval(() => {
  if (Explosion()) {
    console.log('EXPLODED')
    clearInterval(generateMeteors)
    clearInterval(checkIfExploded)
  }
}, 500)

render(Rocket())