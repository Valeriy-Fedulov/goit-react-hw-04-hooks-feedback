const FeedbackOptions = props => (
  <>
    {props.options.map(option => (
      <button
        key={option}
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
