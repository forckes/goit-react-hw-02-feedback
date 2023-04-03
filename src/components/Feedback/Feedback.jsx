import React, { Component } from 'react';
import { Box } from 'components/Box/Box';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import feedbackCategories from '../../feedbackCategories.json';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackTypes = Object.keys(this.state);
    return (
      <Box p={2} justifyItems="center" flexDirection="column" display="flex">
        <FeedbackOptions
          onLeaveFeedback={this.leaveFeedback}
          feedbackCategoriesNames={feedbackCategories}
          type={'button'}
        />

        <Statistics
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          countTotalFeedback={this.countTotalFeedback}
          feedbackTypes={feedbackTypes}
          feedback={this.state}
        />
      </Box>
    );
  }
}

export default Feedback;
