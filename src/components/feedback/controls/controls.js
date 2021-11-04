import React from 'react';

const Controls = ({ onIncrement }) => (
  <>
    <h2>Please leave feedback</h2>
    <button
      type="button"
      onClick={() => {
        onIncrement();
        console.log('Good');
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        onIncrement();
        console.log('Neutral');
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        onIncrement();
        console.log('Bad');
      }}
    >
      Bad
    </button>
  </>
);

export default Controls;
