const test = require('tape');
require('babel-register')({
  presets: ['env']
});
const Component = require('../src/component').default;

test('component-0', (assert) => {
  const message = 'Component should have init method';
  const component = Component();
  const actual = 'init' in component;
  const expected = true;

  assert.same(actual, expected, message);
  assert.end();
});

test('component-1', (assert) => {
  const message = 'Component should return unique id';
  const component1 = Component();
  const component2 = Component();
  const id1 = component1.getId();
  const id2 = component2.getId();

  assert.notEqual(id1, id2, message);
  assert.end();
});

test('component-2', (assert) => {
  const message = 'Attached method should have access to base props';
  const component = Component({
    foo: function foo() {
      return this.getId();
    }
  });
  const id = component.foo();

  assert.ok(id, message);
  assert.end();
});

test('component-3', (assert) => {
  const message = 'The onRender method should be overwritable';
  const parent = Component({
    render: function render() {
      this.foo = 'isRendered';
      this.dispatch('render');
    }
  });
  const child = Component({
    onRender: function onRender() {
      this.foo = 'isRendered';
    },
    foo: 'notRendered',
    target: parent
  });
  parent.render();

  const actual = child.foo;
  const expected = 'isRendered';

  assert.same(actual, expected, message);
  assert.end();
});

test('component-4', (assert) => {
  const message = 'Component prototype should be same for components';
  const comp1 = Component({});
  const comp2 = Component({ onInit: () => 'test' });
  const proto1 = Object.getPrototypeOf(comp1);
  const proto2 = Object.getPrototypeOf(comp2);

  assert.same(proto1, proto2, message);
  assert.end();
});
