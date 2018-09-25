const clickHandler = (e) => console.log('I\'m the clichandler');

const methods = {
  active: (el) => console.log('Activating... ' + el.getAttribute('data-layer'))
};
const data1 = {
  layer: 'layer1'
};
const data2 = {
  layer: 'layer2'
};
const data3 = {
  layer: 'layer3'
};

const buttons = [cs.Button({
  icon: 'img/farg.png',
  cls: 'round smallest border',
  iconCls: 'icon-small',
  state: 'active',
  methods,
  data: data1
}),
cs.Button({
  icon: 'img/gra.png',
  cls: 'round smallest border',
  iconCls: 'icon-small',
  methods,
  data: data2
}),
cs.Button({
  icon: 'img/orto.png',
  cls: 'round smallest border',
  iconCls: 'icon-small',
  methods,
  data: data3
})
];

const toggleGroup = cs.ToggleGroup({
  components: buttons,
  cls: 'spacing-horizontal-small'
});

const divider = cs.Element({
  cls: 'divider',
  style: {
    'border-color': 'rgba(50,50,50, 0.2)',
    'border-width': '2px',
    'margin-bottom': '6px',
    'margin-top': '6px'
  }  
});

const addButton = cs.Button({
  cls: 'round smallest border',
  iconCls: 'icon-small bg-primary',
  icon: '#cu_add_24px',
  iconStyle: {
    fill: '#fff'
  }
});

const target = document.querySelector('.app');
const flexContainer = cs.Element({
  cls: 'flex',
  components: [toggleGroup, divider, addButton]
});

const container = cs.Element({
  style: {
    width: 'auto'      
  },
  cls: 'control width-4 bottom-right box flex layer-switcher padding-small',
  components: [flexContainer],
  target: target
});

container.render();

// const dividerEl = cs.divider({
//   target: flexContainer,
//   style: {
//     'border-color': 'rgba(50,50,50, 0.2)',
//     'border-width': '2px',
//     'margin-bottom': '6px',
//     'margin-top': '6px'
//   }
// });
// radioEl.render();
// dividerEl.render();
// addButton.render();

// let c = box({
//   target,
//   cls: 'control width-3',
//   style: {
//     height: '200px',
//     'margin-left': '10px',
//     right: 0
//   }
// });
// let d = dom.createElement('div', 'box2');
// c.render().appendChild(d);
