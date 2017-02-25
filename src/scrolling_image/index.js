import React, {PropTypes} from 'react';
import { StyleSheet, Image, Animated } from 'react-native';
import { sequence } from '../lib/generators';
import Animation from '../lib/animation';
import {factory} from 'javascript_utilities';

const styles = StyleSheet.create({
  background: {
    position: 'absolute', 
    top:0, 
    left:0
  }
});

class ScrollingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: new Animated.Value(0),
      positionY: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const {maxX, maxY} = this.props;
    this.animate(this.state.positionX, -maxX, 100000);
    this.animate(this.state.positionY, -maxY, 60000);
  }

  animate(state, target, duration) {
    sequence([
      factory(Animation, state)
        .to(target).in(duration)
        .to(0).in(duration)     
    ]).start(true);
  }

  render() {
    const { image, color } = this.props;
    const { positionX, positionY } = this.state;

    return (
      <Animated.View style={{left: positionX, top: positionY}}>
        <Image source={image} style={[styles.background, {backgroundColor: color}]} />
      </Animated.View>
    );
  }
}

ScrollingImage.propTypes = {
  image: PropTypes.number.isRequired,
  color: PropTypes.string,
  maxX: PropTypes.number,
  maxY: PropTypes.number
};

ScrollingImage.defaultProps = {
  color: 'black',
  maxX: 2500,
  maxY: 1000 
};

export default ScrollingImage;