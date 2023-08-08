AFRAME.registerComponent('event-emit', {
  schema: {
    __event: {
      type: 'string',
      default: '',
    },
    __emit: {
      type: 'string',
      default: '',
    },
    args: {
      type: 'array',
      value: [],
    },
  },

  multiple: true,

  init() {
    if (!this.data.__event) {
      throw new Error('__event is not set');
    }
    if (!this.data.__emit) {
      throw new Error('__emit event is not set');
    }
    this.emitEvent = this.emitEvent.bind(this);
    this.el.addEventListener(this.data.__event, this.emitEvent);
  },
  remove() {
    this.el.removeEventListener(this.data.__event, this.emitEvent);
  },
  emitEvent() {
    this.el.emit(this.data.__emit, { args: this.data.args });
  },
});
