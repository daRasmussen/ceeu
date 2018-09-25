const test = require('tape');
require('babel-register')({
  presets: ['env']
});
const Button = require('../src/button').default;

test('button-0', (assert) => {
  const message = 'Should return simple button markup';
  const button = Button();
  const actual = button.render();

  assert.ok(actual, message);
  assert.end();
});

test('button-1', (assert) => {
  const message = 'Should return style as string';
  const button = Button({
    style: {
      'background-color': 'green'
    }
  });
  const actual = button.getStyle();
  const expected = 'background-color: green;';

  assert.equal(actual, expected, message);
  assert.end();
});
