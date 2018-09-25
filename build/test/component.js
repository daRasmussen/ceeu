var app = function app() { 

  var Buttons = function Buttons() {
    var btn1;
    return cu.Component({
      onInit() {
        btn1 = cu.Button({
          click: () => { alert('click')},
          cls: 'bg-primary text-white rounded',
          text: 'Button'
        });
        this.addComponent(btn1);
      },
      onRender: function onRender() {
        this.dispatch('render');
      },
      render: function render() {
        return `${btn1.render()}`
      }
    });
  };

  var buttons;

  return cu.Component({
    onInit() {
      buttons = Buttons();
      this.addComponent(buttons);
    },
    render: function render() {
      var target = document.querySelector('.app');
      var template = `<div class="padding-large">
                        <div>
                          <h5>Buttons</h5>
                          ${buttons.render()}
                        </div>
                      </div>`;
      var el = cu.dom.html(template);
      target.appendChild(el);
      this.dispatch('render');
    }
  });
};

app().render();