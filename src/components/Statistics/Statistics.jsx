// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options, onLeaveFeedback, good, neutral, bad }) => {
  return (
    <div className={css.window}>
      <p className={css.mainP}>Please leave feedback</p>
      <div className={css.feedbackButtons}>
        {options.map(option => {
          return (
            <button
              className={css.btn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
      <p className={css.mainP}>Statistics</p>
      <ul className={css.statistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
};

export default Statistics;
