const Meteor = (size, lp) => {
  const meteorEl = document.createElement('img')
  meteorEl.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Dark_moon_emoji_icon_png_grande.png?v=1480481026"
  meteorEl.classList.add('meteor')
  meteorEl.width = size
  meteorEl.height = size
  meteorEl.style.left = lp + 'px'

  return meteorEl
}

export default Meteor