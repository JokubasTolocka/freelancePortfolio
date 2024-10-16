import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  * {
    box-sizing: border-box;
  }

  #___gatsby {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
