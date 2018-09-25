const Eventer = function Eventer() {
  return {
    events: {},
    on: function on(event, callback) {
      const callbacks = this.events[event] || [];
      callbacks.push(callback.bind(this));
      this.events[event] = callbacks;
    },
    un: function un(event, callback) {
      const callbacks = this.events[event];
      this.events[event] = callbacks.filter((cb => cb !== callback));
    },
    dispatch: function dispatch(event, data) {
      const callbacks = this.events[event];
      if (!callbacks || callbacks.length < 1) {
        return;
      }
      callbacks.forEach(cb => cb(data));
    }
  };
};

export default Eventer;
