import { Animated } from 'react-native';

function getTimings(animations) {
  var anims = [];
  for(let i = 0; i < animations.length; i++) {
    let anim = animations[i];
    for(let k = 0; k < anim._events.length; k++) {
      let event = anim._events[k];
      if(event.delay > 0)
        anims.push(Animated.delay(event.delay));
      anims.push(Animated.timing(anim.state, event));
    }
  }
  return anims;
}

function applyOperation(op, animations, callback=()=>{}) {
  var anims = getTimings(animations);
  var repeat = false;
  var triggered = false;

  let animate = ()=>{
    if(repeat) {
      callback();
      animations.map(anim => anim.reset());
      op(anims).start(animate);
    }
    else if(!triggered) {
      callback();
      op(anims).start();
    }
    triggered = true;
  };

  return {
    stop: () => {
      repeat = false;
    },
    start: (isRepeating=false) => {
      repeat = isRepeating;
      animate();
    }
  }
}

function sequence() {
  return applyOperation(Animated.sequence, ...arguments);
}

function parallel() {
  return applyOperation(Animated.parallel, ...arguments);
}

module.exports = {sequence, parallel};