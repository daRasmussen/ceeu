const appendChildren = function appendChildren(el, children) {
  children.forEach(child => el.appendChild(child));
  return el;
};

export default appendChildren;
