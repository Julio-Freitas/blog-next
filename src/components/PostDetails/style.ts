import Styled, { css } from 'styled-components';

export const Container = Styled.div`
${({ theme }) => css`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  margin: ${theme.spacings.small} 0;
  font-style: italic;
  text-align: center;
`}

`;
