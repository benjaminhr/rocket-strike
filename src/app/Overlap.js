const isOverLapping = (e1, e2) => {
  if( e1.length && e1.length > 1 ){
    e1 = e1[0];
  }
  if( e2.length && e2.length > 1 ){
    e2 = e2[0];
  }
  var rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false;
  var rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false;

  var overlap = null;
  if( rect1 && rect2 ){
    overlap = !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
      )
    return overlap;  
  } else {
    return overlap;
  }
}

setInterval(() => {
  const rocket = document.querySelector('.rocket')
  const doc = document.querySelectorAll('.meteor')
  const initialOpacity = window.getComputedStyle(rocket).opacity

  doc.forEach((meteor) => {
    const overlaps = isOverLapping(meteor, rocket)

    if (overlaps) {
      rocket.style.opacity = initialOpacity - 0.3
    }
  })
}, 500)


