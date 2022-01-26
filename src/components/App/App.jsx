import React, { Component } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import { BtnList } from "../FeedbackOptions/FeedbackOptions.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (option) => {
    this.setState((prewState) => ({ [option]: prewState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const positiveFeedbackPercentage = Math.round(
      (good * 100) / this.countTotalFeedback()
    );
    return positiveFeedbackPercentage ? positiveFeedbackPercentage : "0";
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <BtnList>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onHandleFeedback={this.handleFeedback}
            />
          </BtnList>
        </Section>
        {good || neutral || bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
