import Styled, { css } from 'styled-components';
export const Container = Styled.img`

${({ theme }) => css`
  padding: ${theme.spacings.medium};
  margin-top: ${theme.spacings.medium};
  object-fit: contain;
  max-width: 100%;
  height: 100%;
`}

`;
