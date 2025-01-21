import { createGlobalStyle } from "styled-components";

export const MAX_SITE_WIDTH = 1600;

const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black.dark};
    color: ${({ theme }) => theme.colors.white};
  }

  * {
    box-sizing: border-box;
  }

  #___gatsby {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  #gatsby-focus-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
