import styled from 'styled-components';
export const Button = styled.button`
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]};
  cursor: pointer;
  transition: background-color 0.2s ease 0s;
  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
  :active {
    background-color: ${p => p.theme.colors.active};
  }
`;
export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
`;
