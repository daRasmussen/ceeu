const render = function render(targetEl, content) {
  if (typeof content === 'string') {
    targetEl.innerHTML = content;
  } else if (content instanceof Object) {
    if (content.render) {
      return content.render(targetEl);
    } else if (content.appendChild) {
      targetEl.appendChild(content);
    }
    el.appendChild(content);
  }
  return targetEl;
}

export default render;
