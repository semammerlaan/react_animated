import {isNumeric} from 'javascript_utilities';

export default {
  init(state) {
    this.state = state;
    this._iv = state._value;
    this._events = [];
    return this;
  },
  to(x, y) {
    if(!isNumeric(y))
      this._events.push({toValue:x});
    else
      this._events.push({toValue:{x, y}});
    return this;
  },
  in(duration) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].duration = duration;
    return this;
  },
  ease(easing) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].easing = easing;
    return this;
  },
  delay(duration) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].delay = duration;
    return this;
  },
  reset() {
    this.state.setValue(this._iv);
  }
};
