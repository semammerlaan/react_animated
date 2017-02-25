import React, { PropTypes } from 'react';
import { View, Animated } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { parallel } from '../lib/generators';
import Animation from '../lib/animation';
import {factory} from 'javascript_utilities';

const SIZE = 80;
const OFFSET_Y = 60;
const OFFSET_X = 5;

var Letter = {
  init(ix, iy, letter, dx, dy, scale, duration) {
    this.ix = ix;
    this.iy = iy;
    this.letter = letter;
    this.dx = dx;
    this.dy = dy;
    this.scale = scale;
    this.duration = duration;
    return this;
  }
};

class SlidingText extends React.Component {
  constructor(props){
    super(props);
    this.state={
      animations: []
    };

    props.letters.map((letter, i)=>{
      let normalize = (letter.scale * SIZE) * i;
      let position = new Animated.ValueXY({x: letter.ix, y: letter.iy - normalize});
      let anim = factory(Animation, position).to({x: letter.dx, y: letter.dy - normalize}).in(letter.duration);
      this.state.animations.push(anim);
    });

    this.renderSvg = this.renderSvg.bind(this);
  }

  componentDidMount() {
    parallel(this.state.animations).start();
  }

  renderSvg(o, i) {
    const {animations} = this.state;
    return (
      <Animated.View style={{transform: animations[i].state.getTranslateTransform()}} >
        <Svg height={o.scale*SIZE} width={o.scale*SIZE} >
          <Path scale={o.scale+''} x={OFFSET_X*o.scale+''} y={o.scale*OFFSET_Y+''} d={this.props.font[o.letter]} stroke={this.props.stroke} />
        </Svg>
      </Animated.View>
    );
  }


  render() {
    const {letters} = this.props;
    return (
      <View>
        {letters.map(this.renderSvg)}
      </View>
    );
  }
}

SlidingText.propTypes = {
  font: PropTypes.object.isRequired,
  letters: PropTypes.array.isRequired,
  delay: PropTypes.number,
  stroke: PropTypes.string
};

SlidingText.defaultProps = {
  delay: 0,
  stroke: 'red'
};

function createLetter() {
  return Object.create(Letter).init(...arguments);
}

export default {component: SlidingText, createLetter};