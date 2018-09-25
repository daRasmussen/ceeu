import Cuid from 'cuid';
import Eventer from './utils/eventer';
import isComponent from './utils/iscomponent';

const Base = function Base() {
  const id = Cuid();
  let components = [];

  return {
    init() {
      this.on('init', this.onInit);
      this.on('add', this.onAdd);
      this.dispatch('init');
      return this;
    },
    addComponent(child) {
      const evt = { target: this };
      components.push(child);
      child.dispatch('add', evt);
      return child;
    },
    addComponents(children) {
      children.forEach((child) => {
        this.addComponent(child);
      });
    },
    clearComponents() {
      components.forEach((component) => {
        component.dispatch('clear', { target: this });
      });
      components = [];
    },
    getComponents: () => components,
    getId: () => id,
    onAdd(evt = {}) {
      if (evt.target) {
        if (isComponent(evt.target)) {
          evt.target.on('render', this.onRender.bind(this));
          this.on('clear', () => {
            evt.target.un('render', this.onRender);
          });
        }
      }
    },
    onInit: () => {},
    onRender: () => {}
  };
};

const Component = function Component(options) {
  return Object.assign({}, Eventer(), Base(), options).init();
};

export default Component;
