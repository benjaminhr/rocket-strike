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
    duration: 7000,
    loop: false,
    elasticity: 0
  })
}, 2000)

function getComputedTranslateXY(obj)
{
	const transArr = [];
    if(!window.getComputedStyle) return;
    const style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);    
    if(mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
    mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;
    return transArr;
}

const removeMeteors = () => {
  const meteors = document.querySelectorAll('.meteor')
  const maxHeight = window.innerHeight + 200

  meteors.forEach(meteor => {
    const currentY = getComputedTranslateXY(meteor)[1]
    if (currentY > maxHeight) {
      meteor.remove()
    }
  })
}

setInterval(() => {
  removeMeteors()
}, 1000)

const checkIfExploded = setInterval(() => {
  if (Explosion()) {
    console.log('EXPLODED')
    clearInterval(generateMeteors)
    clearInterval(checkIfExploded)
  }
}, 500)

render(Rocket())