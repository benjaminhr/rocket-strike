const isInViewPort = (element) => {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 10 &&
    rect.left >= 10 &&
    rect.bottom <= (document.clientHeight - 100 || html.clientHeight) &&
    rect.right <= (document.clientWidth - 100 || html.clientWidth)
  )
}

export default isInViewPort