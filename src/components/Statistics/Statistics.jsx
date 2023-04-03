import { Box } from 'components/Box/Box';
import { Notification } from 'components/Notification/Notification';
import {
  Title,
  StatisticsList,
  Statistic,
  AdditionalInfo,
} from './Statistics.styled';

export default function Statistics({
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  feedbackTypes,
  feedback,
}) {
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const noFeedbackGiven = totalFeedback === 0;

  return (
    <Box>
      <Title>Statistics</Title>
      {noFeedbackGiven ? (
        <Notification message={'No feedback given'} />
      ) : (
        <Box>
          <StatisticsList type="none">
            {feedbackTypes.map(type => (
              <Statistic key={type}>
                {type}: {feedback[type]}
              </Statistic>
            ))}
            <AdditionalInfo> Total: {totalFeedback}</AdditionalInfo>
            <AdditionalInfo>
              Positive feedback: {positiveFeedbackPercentage}%
            </AdditionalInfo>
          </StatisticsList>
        </Box>
      )}
    </Box>
  );
}
