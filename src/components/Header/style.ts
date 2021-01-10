import Styled, { css } from 'styled-components';
export const Container = Styled.div`
${({ theme }) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  text-align: center;
`}
 a{
   color: ${({ theme }) => theme && theme.colors.white};
 }
`;
