var target = document.querySelector('.app');

var items = new Array(10).fill('').map(() => {
  return `
  <li class="item">
    <div class="flex row">
      <div class="grow">
        <div class="text-black text-normal text-weight-bold">Item name</div>
        <p class="text-grey text-small">In lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div class="flex no-grow no-shrink align-center">
        <button class="small round square compact boxshadow-subtle bg-blue text-white">+</button>
      </div>
    </div>
  </li>`;
}).join('');

var text1 = cs.template('<div class ="no-grow no-shrink" style="flex-basis: 180px;"><h6>Left container</h6></div>');
var text2 = cs.template(`
  <div class="" style="">
    <ul class="list divided">
      ${items}                                                      
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
    width: '800px'
  }
});

c.render();