import React from 'react';
import { FeedbackOptions } from './feedbackoptions';
import { Statistics } from './statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    e.preventDefault();

    e.target.id === 'Good' &&
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));

    e.target.id === 'Neutral' &&
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));

    e.target.id === 'Bad' &&
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
