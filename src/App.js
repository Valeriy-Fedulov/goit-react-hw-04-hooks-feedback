import React, { useState } from 'react';
import { Section } from './components/section';
import { FeedbackOptions } from './components/feedbackoptions';
import { Notification } from './components/notification';
import { Statistics } from './components/statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    e.preventDefault();
    e.target.id === 'good' && setGood(good + 1);
    e.target.id === 'neutral' && setNeutral(neutral + 1);
    e.target.id === 'bad' && setBad(bad + 1);
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((100 / countTotalFeedback()) * good);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
