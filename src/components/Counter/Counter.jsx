import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export function Counter() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const addFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  const { good, neutral, bad } = feedback;
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const options = Object.keys(feedback);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onPositiveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There are no reviews here yet!" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            goodPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}