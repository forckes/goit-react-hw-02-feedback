import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
`;
export const StatisticsList = styled.ul`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px;
  gap: ${p => p.theme.space[3]}px;
`;
export const Statistic = styled.li`
  font-size: ${p => p.theme.fontSizes.l};
  ::first-letter {
    text-transform: capitalize;
  }
`;
export const AdditionalInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;
