import React, {PropTypes, Component} from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { sequence } from '../lib/generators';
import Animation from '../lib/animation';
import {factory} from 'javascript_utilities';
var icon = require('./pd.png');

const MULTIPLIER = 400;
const TARGET = 360*MULTIPLIER;
const DURATION = 6800*MULTIPLIER;

const styles = StyleSheet.create({
  small: {
    height:32,
    width: 32
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    margin: 25,
  },
  outer: {
    justifyContent: 'space-between',
    height:160,
    width: 32
  },
  inner: {
    justifyContent: 'space-between',
    width: 32
  },
  middle: {
    justifyContent: 'space-between',
    height:224,
    width: 32
  }
});

class ImageSpinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: new Animated.Value(0)
    };
  }

  componentDidMount() {
    sequence([
      factory(Animation, this.state.angle)
        .to(TARGET).in(DURATION).ease(Easing.linear)
    ]).start(true);
  }

  getTransform(clockwise) {
    var out = clockwise ? ['0deg', '360deg'] : ['360deg', '0deg'];
    return [{
      rotate: this.state.angle.interpolate({
        inputRange: [0, 360],
        outputRange: out
      })
    }];
  }

  render() {
    const { im_0, im_1, im_2, im_3, im_4, im_5, im_6, im_7 } = this.props;

    var cwStyle = [styles.row, {transform: this.getTransform(true)}];
    var ccwStyle = [styles.small, {transform: this.getTransform(false)}];

    return (
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Animated.View style={cwStyle}>
          <View style={styles.small}>
            <Animated.Image source={im_0} style={ccwStyle} />
          </View>
          <View style={styles.outer}>
            <Animated.Image source={im_1} style={ccwStyle} />
            <Animated.Image source={im_2} style={ccwStyle} />
          </View>
          <View style={styles.inner}>
          </View>
          <View style={styles.middle}>
            <Animated.Image source={im_3} style={ccwStyle} />
            <Animated.Image source={im_4} style={ccwStyle} />
          </View>
          <View style={styles.inner}>
          </View>
          <View style={styles.outer}>
            <Animated.Image source={im_5} style={ccwStyle} />
            <Animated.Image source={im_6} style={ccwStyle} />
          </View>
          <View style={styles.small}>
            <Animated.Image source={im_7} style={ccwStyle} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

ImageSpinner.propTypes = {
  im_0: PropTypes.number,
  im_1: PropTypes.number,
  im_2: PropTypes.number,
  im_3: PropTypes.number,
  im_4: PropTypes.number,
  im_5: PropTypes.number,
  im_6: PropTypes.number,
  im_7: PropTypes.number
};

ImageSpinner.defaultProps = {
  im_0: icon,
  im_1: icon,
  im_2: icon,
  im_3: icon,
  im_4: icon,
  im_5: icon,
  im_6: icon,
  im_7: icon
};

export default ImageSpinner;