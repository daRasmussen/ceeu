import Component from './component';
import typeOfIcon from './utils/typeoficon';
import { createStyle } from './dom/dom';

export default function Icon(options = {}) {
  let {
    icon
  } = options;
  const {
    cls = '',
    style: styleOptions
  } = options;

  let iconType = typeOfIcon(icon);
  const style = createStyle(styleOptions);

  return Component({
    render() {
      if (iconType === 'image') {
        return `
          <img class="${cls}" style="${style}" src=${icon}>
        `;
      }
      if (iconType === 'sprite') {
        return `
          <svg class="${cls}" style="${style}">
            <use xlink:href=${icon}></use>
          </svg>
        `;
      }
      return '';
    },
    setIcon(newIcon) {
      iconType = typeOfIcon(newIcon);
      icon = newIcon;
    }
  });
}
