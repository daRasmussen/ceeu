const test = require('tape');
require('babel-register')({
  presets: ['env']
});
const Component = require('../src/component').default;
const isComponent = require('../src/utils/iscomponent').default;

test('isComponent-0', (assert) => {
  const message = 'Component should validate component true';
  const component = Component();
  const actual = isComponent(component);

  assert.ok(actual, message);
  assert.end();
});

test('isComponent-1', (assert) => {
  const message = 'Null should validate component false';
  const actual = isComponent(null);

  assert.notOk(actual, message);
  assert.end();
});

test('isComponent-2', (assert) => {
  const message = 'Object with on method only should validate component false';
  const actual = isComponent({ on: null });

  assert.notOk(actual, message);
  assert.end();
});
