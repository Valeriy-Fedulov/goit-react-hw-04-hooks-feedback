import React from 'react';

const Statistics = ({ good, neutral, bad }) => (
  <>
    <h2>Statistics</h2>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {good + neutral + bad}</span>
    <span>
      Positive feedback: {Math.round((100 / (good + neutral + bad)) * good)}%
    </span>
  </>
);

export default Statistics;
