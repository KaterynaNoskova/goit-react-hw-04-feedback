import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onPositiveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        className={css.button}
        type="button"
        onClick={() => onPositiveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
