const extend = function extend(first, second) {
  const extended = Object.assign({}, first, second);
  if ('cls' in first && 'cls' in second) {
    extended.cls = `${first.cls} ${second.cls}`;
  }
  if ('style' in first && 'style' in second) {
    extended.style = Object.assign({}, first.style, second.style);
  }
  return extended;
};

export default extend;
