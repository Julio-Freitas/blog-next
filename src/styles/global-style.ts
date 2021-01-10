import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:none;
}
  html{
    font-size: 62.5%
  }
  body{
    height: 100%;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
  a{
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: opacity 300ms ease-in-out;
    text-decoration: none;

    &:hover{
      opacity: .6;
    }
  }
`;
