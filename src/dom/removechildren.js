const removeChildren = function removeChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  return el;
};

export default removeChildren;
