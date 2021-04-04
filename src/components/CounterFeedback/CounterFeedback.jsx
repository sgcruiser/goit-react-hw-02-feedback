import React from 'react';
// import PropTypes from 'prop-types';

// import FeedbackOptions from './FeedbackOptions';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

import styles from './CounterFeedback.module.css';

class CounterFeedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = event => {
    const labelButton = event.target.textContent;

    this.setState(prevState => ({ [labelButton]: prevState[labelButton] + 1 }));
  };

  // incrementGood = event => {
  //   console.log(event);
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // incrementNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // incrementBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const percentageFeedback =
      this.countTotalFeedback() === 0
        ? 0
        : Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return percentageFeedback;
  };

  render() {
    // const buttonName = Object.keys(this.state);
    return (
      <div className={styles.counter}>
        {/* {console.log(buttonName)} */}
        <Section title="Please leave feedback">
          {/* <div className={styles.button}>
            <button type="button" onClick={this.incrementGood}>
              Good
            </button>
            <button type="button" onClick={this.incrementNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.incrementBad}>
              Bad
            </button>
          </div> */}
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {Object.values(this.state).every(value => value === 0) ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}

export default CounterFeedback;
