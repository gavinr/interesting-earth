const isElementOutViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
};

const isElementInViewport = (el) => {
  return !isElementOutViewport(el);
}

// https://stackoverflow.com/a/12646864/2039
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export {
  isElementOutViewport,
  isElementInViewport,
  shuffleArray
};