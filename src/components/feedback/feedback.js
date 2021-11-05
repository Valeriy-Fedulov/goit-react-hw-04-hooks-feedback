import React from 'react';
import Controls from './controls';
import Statistics from './statistics';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.percentageIncrement();
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.percentageIncrement();
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.percentageIncrement();
  };

  percentageIncrement() {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div>
        <Controls
          onGoodIncrement={this.goodIncrement}
          onNeutralIncrement={this.neutralIncrement}
          onBadIncrement={this.badIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default Feedback;
