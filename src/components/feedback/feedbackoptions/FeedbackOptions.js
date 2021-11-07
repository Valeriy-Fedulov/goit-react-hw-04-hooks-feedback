import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export { FeedbackOptions };
