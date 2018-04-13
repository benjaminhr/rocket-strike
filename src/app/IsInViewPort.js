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

export default isInViewPort