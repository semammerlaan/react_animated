import React, { PropTypes } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { sequence } from '../lib/generators';
import Animation from '../lib/animation';
import {factory} from 'javascript_utilities';

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

class PoppingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      top: new Animated.Value(-62)
    };

    this.animation = sequence([
      factory(Animation, this.state.top)
        .to(0).in(600),
      factory(Animation, this.state.top)
        .to(-62).in(200).delay(2000)
    ], this.animCallback.bind(this));
  }

  animCallback() {
    const i = this.state.index + 1;
    this.setState({index: (i > this.props.entries.length - 1) ? 0 : i});
  }
  
  componentDidMount() {
    this.animation.start(true);
  }

  componentWillUnmount() {
    this.animation.stop();
  }

  render() {
    const { top, index } = this.state;
    const { entries } = this.props;

    return (
      <Animated.Text style={[styles.text, {top: top}]}>
        {entries[index]}
      </Animated.Text>
    );
  }
}

PoppingText.propTypes = {
  entries: PropTypes.array.isRequired
};

export default PoppingText;