import Component from './component';
import Element from './element';
import Icon from './icon';
import {createStyle} from './dom/dom';

function create(options) {
  const nel = document.createElement(options.type);
  nel.id = options.id;
  nel.innerHTML = options.content || '';
  return nel;
}

export default function Window(options = {}) {
  let {
    icon,
    state = 'initial',
    text = ''
  } = options;
  const {
    cls = '',
    methods = {},
    data = {},
    iconCls = '',
    iconStyle = {},
    click,
    draggable,
    resizable,
    position,
    style: styleSettings,
    textCls = '',
    validStates = ['initial', 'active', 'disabled', 'loading']
  } = options;

  let windowEl;

  const win = create({
    type: 'div',
    id: 'window'
  });
  const head = create({
    type: 'div',
    id: 'window-head',
    content: '&nbsp;'
  });
  const body = create({
    type: 'div',
    id: 'window-body',
    content: '&nbsp;'
  });
  const ghost = create({
    type: 'div',
    id: 'window-ghost'
  });

  win.innerHTML += head.outerHTML;
  win.innerHTML += body.outerHTML;
  text = `${win.outerHTML}${ghost.outerHTML}`;

  const style = createStyle(styleSettings);
  const iconComponent = icon ? Icon({
    icon,
    cls: iconCls,
    style: iconStyle
  }) : '';

  const textMarkup = text ? Element({
    cls: textCls,
    innerHTML: text,
    tagName: 'span'
  }).render() : '';

  const getState = () => state;

  const setState = function setState(newState) {
    if (newState !== state && validStates.indexOf(newState) > -1) {
      if (state === 'initial') {
        windowEl.classList.add(newState);
      } else if (newState === 'initial') {
        windowEl.classList.remove(state);
      } else {
        windowEl.classList.remove(state);
        windowEl.classList.add(newState);
      }
      state = newState;
      if (state in methods) {
        methods[state].call(this, windowEl);
      }
    }
  };

  const getInnerHTML = () => {
    if (iconComponent) {
      return `${textMarkup}${iconComponent.render()}`;
    }
    return textMarkup;
  };

  function dragElement(elmnt) {
    const header = document.getElementById(`${elmnt.id}`);
    // console.log(header);
  }

  const onChange = function onChange(evt) {
    if (evt.state) {
      setState(evt.state);
    }
    if (evt.text) {
      text = evt.text;
    }
    if (evt.icon) {
      icon = evt.icon;
      iconComponent.setIcon(icon);
    }
    this.dispatch('update');
  };

  const onUpdate = function onUpdate() {
    const el = document.getElementById(this.getId());
    el.innerHTML = getInnerHTML();
  };

  return Component({
    data,
    getState,
    onInit() {
      this.on('change', onChange.bind(this));
      this.on('update', onUpdate.bind(this));
    },
    onRender() {
      windowEl = document.getElementById(this.getId());
      const window = windowEl.querySelector('#window');
      if (resizable) {
        window.setAttribute('style', 'resize: both;');
      }

      if (draggable) {
        dragElement(windowEl);
      }

      if (position) {
        window.setAttribute('style', `top: ${position.top}; left: ${position.left}`);
      }
      if (click) {
        this.on('click', click.bind(this));
        this.on('clear', () => {
          this.un('click', click.bind(this));
        });
      }
      windowEl.addEventListener('click', (e) => {
        this.dispatch('click');
        e.preventDefault();
        alert('click');
      });

      if (validStates.indexOf(state) > 0) {
        windowEl.classList.add(state);
      }
    },
    render: function render() {
      return `<div id="${this.getId()}" class="${cls}" style="${style}">
                ${getInnerHTML()}
              </div>`;
    },
    setIcon(newIcon) {
      if (iconComponent) {
        iconComponent.setIcon(newIcon);
      }
    },
    setState
  });
}
