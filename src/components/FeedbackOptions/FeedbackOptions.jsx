import { Box } from 'components/Box/Box';
import { Button, Title } from './FeedbackOptions.styled';

export default function FeedbackOptions({
  feedbackCategoriesNames,
  onLeaveFeedback,
  type = 'button',
}) {
  return (
    <Box>
      <Title>Please leave feedback</Title>
      <div>
        {feedbackCategoriesNames.map(({ name, id }) => {
          const normalizeName = name.toLowerCase();
          return (
            <Button
              type={type}
              onClick={() => onLeaveFeedback(normalizeName)}
              key={id}
            >
              {name}
            </Button>
          );
        })}
      </div>
    </Box>
  );
}
