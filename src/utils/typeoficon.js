const typeOfIcon = function typeOfIcon(src) {
  if (src.length) {
    let char = src.slice(0, 1);
    if (char === '#') {
      return 'sprite';
    } else {
      return 'image';
    }
  }
  return '';
}

export default typeOfIcon;
