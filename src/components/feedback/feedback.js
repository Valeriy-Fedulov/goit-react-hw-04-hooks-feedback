import React from 'react';

class Feedback extends React.Component {
  onHahdleIncrement = () => {
    console.log('+1');
    console.log(this);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button
          type="button"
          onClick={() => {
            this.onHahdleIncrement();
            console.log('Good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.onHahdleIncrement();
            console.log('Neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.onHahdleIncrement();
            console.log('Bad');
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default Feedback;
