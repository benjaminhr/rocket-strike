const pxToNumber = (str) => Number(str.substring(0, str.length - 2))

const isInViewPort = (element) => {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 10 &&
    rect.left >= 10 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  )
}

const controls = (e) => {
  const leftArrow = 37
  const rightArrow = 39
  const rocket = document.querySelector('.rocket')
  const rocketPos = window.getComputedStyle(rocket).getPropertyValue('left')
  
  if (e.keyCode == leftArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketPos) - 20) + 'px'
  } else if (e.keyCode == rightArrow && isInViewPort(rocket)) {
    rocket.style.left = (pxToNumber(rocketPos) + 20) + 'px'
  }
}

document.onkeydown = controls
