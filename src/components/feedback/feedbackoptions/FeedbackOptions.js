import React from 'react';

const FeedbackOptions = props => (
  <>
    <h2>Please leave feedback</h2>
    {props.options.map(option => (
      <button
        id={option}
        type="button"
        onClick={e => {
          props.onLeaveFeedback(e);
        }}
      >
        {option}
      </button>
    ))}
  </>
);

export { FeedbackOptions };
