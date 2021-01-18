import Styled, { css } from 'styled-components';
export const Container = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = Styled.h2`

${({ theme }) => css`
  font-size: ${theme.font.sizes.large};
`}
`;
