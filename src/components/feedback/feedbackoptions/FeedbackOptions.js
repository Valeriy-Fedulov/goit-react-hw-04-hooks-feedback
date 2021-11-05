import React from 'react';

const Controls = ({ onLeaveFeedback }) => (
  <>
    <h2>Please leave feedback</h2>
    <button
      id="good"
      type="button"
      onClick={e => {
        onLeaveFeedback(e);
      }}
    >
      Good
    </button>
    <button
      id="neutral"
      type="button"
      onClick={e => {
        onLeaveFeedback(e);
      }}
    >
      Neutral
    </button>
    <button
      id="bad"
      type="button"
      onClick={e => {
        onLeaveFeedback(e);
      }}
    >
      Bad
    </button>
  </>
);

export default Controls;
