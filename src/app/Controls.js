import isInViewPort from './IsInViewPort'

const pxToNumber = (str) => Number(str.substring(0, str.length - 2))

const controls = (e) => {
  const leftArrow = 37
  const rightArrow = 39
  const rocket = document.querySelector('.rocket')
  const rocketPos = window.getComputedStyle(rocket).getPropertyValue('left')
  
  if (e.keyCode == leftArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketPos) - 30) + 'px'
  } else if (e.keyCode == rightArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketPos) + 30) + 'px'
  }
}

document.onkeydown = controls
