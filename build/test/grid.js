var target = document.querySelector('.app');

var text1 = cs.template('<div class ="no-grow no-shrink" style="flex-basis: 250px;"><h3>Left</h3><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div>');
var text2 = cs.template(`
  <div class="" style="">
    <h3>Main</h3>
    <ul>
      <li>
        <h4>Item</h4>
        <p class="text-light">In lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></li>
    </ul>
  </div>`);

var grid = cs.element({
  cls: 'grid',
  components: [text1, text2]
});
var gridContainer = cs.element({
  components: [grid],
  cls: 'container'
});

var c = cs.box({
  target: target,
  components: [gridContainer],
  position: 'center-center',
  cls: 'control width-6',
  style: {
    height: '500px',
    width: '800px'
  }
});

c.render();