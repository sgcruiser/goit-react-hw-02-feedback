import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className={styles.button}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>

            {/* <button
              type="button"
              className={styles.button}
              onClick={onLeaveFeedback.incrementNeutral}
            >
              {options[1]}
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={onLeaveFeedback.incrementBad}
            >
              {options[2]}
            </button> */}
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
