import isInViewPort from './IsInViewPort'

const pxToNumber = (str) => Number(str.substring(0, str.length - 2))

const controls = (e) => {
  const leftArrow = 37
  const rightArrow = 39
  const upArrow = 38
  const downArrow = 40

  const rocket = document.querySelector('.rocket')
  const rocketLeftPos = window.getComputedStyle(rocket).getPropertyValue('left')
  const rocketTopPos = window.getComputedStyle(rocket).getPropertyValue('top')
  
  if (e.keyCode == leftArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketLeftPos) - 50) + 'px'
  } else if (e.keyCode == rightArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketLeftPos) + 50) + 'px'
  } else if (e.keyCode == downArrow && 
             isInViewPort(rocket) &&
             pxToNumber(rocketTopPos) < 90) {
    rocket.style.top = (pxToNumber(rocketTopPos) + 50) + 'px'
  } else if (e.keyCode == upArrow && isInViewPort(rocket)) {
    rocket.style.top = (pxToNumber(rocketTopPos) - 50) + 'px'
  } 
}

document.onkeydown = controls
