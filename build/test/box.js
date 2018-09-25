var target = document.querySelector('.app');

var text1 = cs.template('<div style="padding: 1rem;"><h3>Rubrik</h3><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div>');
var text2 = cs.template('<div style="padding: 1rem;"><h3>Rubrik</h3><div>In lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div>');
var a = cs.box({
  target: target,
  components: [text1],
  position: 'top-left',
  cls: 'control width-4',
  style: {
    height: '800px'
  }
});

var d = cs.dom.createElement('div', 'box2');
var c = cs.box({
  target: target,
  components: [text2],
  position: 'center-center',
  cls: 'control width-6'
});

a.render();
c.render();

var topCenter = cs.box({
  target: target,
  position: 'top-center',
  cls: 'width-4 control',
  style: {
    height: '40px'
  }
});
topCenter.render();

var bottomCenter = cs.box({
  target: target,
  position: 'bottom-center no-margin',
  cls: 'width-4 control',
  style: {
    height: '40px'
  }
});
bottomCenter.render();

var toolbar = cs.box({
  target: target,
  position: 'top-right',
  cls: 'control height-full',
  style: {
    width: '40px'
  }
});

toolbar.render();
