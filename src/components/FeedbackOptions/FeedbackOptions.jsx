import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onPositiveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        key={option.name}
        className={css.button}
        type="button"
        onClick={() => onPositiveFeedback(option.name)}
      >
        {option.name}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
