import createStyle from './createstyle.js';
import addKeyPrefix from './utils/addkeyprefix.js';

const createElement = function createElement(type, content, options) {
  let settings = options || {};
  let el = document.createElement(type);
  let props = Object.keys(settings);
  props.forEach(function(prop) {
    if (settings[prop]) {
      if (prop === 'style') {
        let style = createStyle(settings.style);
        el.setAttribute('style', style);
      } else if (prop === 'cls') {
        let clsList = settings.cls.split(' ');
        clsList.forEach(cls => el.classList.add(cls));
      } else if (prop === 'data') {
        let dataProps = addKeyPrefix('data-', settings.data);
        Object.keys(dataProps).forEach((dataProp) => el.setAttribute(dataProp, dataProps[dataProp]));
      } else {
        el.setAttribute(prop, settings[prop]);
      }      
    }
  });
  if (typeof content === 'string') {
    el.innerHTML = content;
  } else {
    el.appendChild(content);
  }
  return el;
}

export default createElement;
