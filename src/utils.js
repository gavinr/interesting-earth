const isElementOutViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
};

const isElementInViewport = (el) => {
  return !isElementOutViewport(el);
}

export {
  isElementOutViewport,
  isElementInViewport
};