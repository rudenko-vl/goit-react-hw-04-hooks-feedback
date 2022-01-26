import React, { useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import { BtnList } from "../FeedbackOptions/FeedbackOptions.styled";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  const handleFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage =() => {
    const positiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback()
    );
    return positiveFeedbackPercentage ? positiveFeedbackPercentage : "0";
  }

    return (
      <>
        <Section title="Please leave feedback">
          <BtnList>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onHandleFeedback={handleFeedback}
            />
          </BtnList>
        </Section>
        {good || neutral || bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }


export default App;
