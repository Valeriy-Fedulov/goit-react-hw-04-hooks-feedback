import React from 'react';
import Controls from './controls/controls';
import Statistics from './statistics/statistics';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  hahdleIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Controls onIncrement={this.hahdleIncrement} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default Feedback;
