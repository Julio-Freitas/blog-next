import Styled, { css } from 'styled-components';
export const Container = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;
export const TitleCategory = Styled.h2`
${({ theme }) => css`
  color: ${theme.colors.secondary};
  font-size: ${theme.spacings.large};
  padding: ${theme.spacings.medium} 0;
  font-weight: 300;
  text-transform: capitalize;
`}

`;
