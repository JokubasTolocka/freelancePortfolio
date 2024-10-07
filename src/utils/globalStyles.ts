import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    height: 100%;
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
  }
`;

export default GlobalStyle;
