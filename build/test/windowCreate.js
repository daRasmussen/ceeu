var app = function app() {
  var Windows = function Windows() {
    var window1;
    return cu.Component({
      onInit() {
        window1 = cu.Window({
          // click: () => { alert('click') },
          draggable: true,
          resizable: true,
          position: {
            top: '45px',
            left: '25px'
          },
          cls: '',
          text: ''
          // title: 'Click Me!',
          // body: 'Body'
        });
        this.addComponent(window1);
      },
      onRender: function onRender() {
        this.dispatch('render');
      },
      render: function render() {
        return `${window1.render()}`
      }
    });
  };

  var windows;

  return cu.Component({
    onInit() {
      windows = Windows();
      this.addComponent(windows);
    },
    render: function render() {
      var target = document.querySelector('.app');
      var template = `<div class="padding-large">
                        <div>
                          <h5>Window</h5>
                          ${windows.render()}
                        </div>
                      </div>`;
      var el = cu.dom.html(template);
      target.appendChild(el);
      this.dispatch('render');
    }
  });
};

app().render();