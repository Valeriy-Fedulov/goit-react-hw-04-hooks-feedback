import React from 'react';

const Statistics = ({ good, neutral, bad }) => (
  <>
    <h2>Statistics</h2>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
  </>
);

export default Statistics;
