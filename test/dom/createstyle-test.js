const test = require('tape');
require('babel-register')({
  presets: ['env']
});
const createStyle = require('../../src/dom/dom').createStyle;

test('createStyle-0', (assert) => {
  const message = 'Style object should retun style string';
  const styleObj = {
    'background-color': 'green',
    color: 'white'
  };
  const actual = createStyle(styleObj);
  const expected = ' background-color: green; color: white;';
  assert.equal(actual, expected, message);
  assert.end();
});

test('createStyle-1', (assert) => {
  const message = 'Undefined should return empty style string';
  let style;
  const actual = createStyle(style);
  const expected = '';
  assert.equal(actual, expected, message);
  assert.end();
});

test('createStyle-2', (assert) => {
  const message = 'Style string should return same';
  const style = 'color: white;';
  const actual = createStyle(style);
  const expected = style;
  assert.equal(actual, expected, message);
  assert.end();
});
