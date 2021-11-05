import React from 'react';
import FeedbackOptions from './feedbackoptions';
import Statistics from './statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = e => {
    e.preventDefault();

    e.target.id === 'good' &&
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));

    e.target.id === 'neutral' &&
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));

    e.target.id === 'bad' &&
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    // this.setState(prevState => ({
    //   total: prevState.good + prevState.neutral + prevState.bad,
    // }));
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((100 / prevState.total) * prevState.good),
    }));
  };

  render() {
    const { good, neutral, bad, positivePercentage } = this.state;
    const total = this.countTotalFeedback();
    console.log(total);
    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
