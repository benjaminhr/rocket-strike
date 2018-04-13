const Explosion = () => {
  const rocket = document.querySelector('.rocket')
  const opacity = window.getComputedStyle(rocket).getPropertyValue('opacity')

  if (opacity <= 0) {
    rocket.style.content = "url('https://media.giphy.com/media/3ohhwjlY5Qvz1SA4Y8/giphy.gif')"
    rocket.style.opacity = 1
    rocket.classList.remove('rocket')
    rocket.classList.add('explosion')

    return true
  } else {
    return false
  }
}

export default Explosion