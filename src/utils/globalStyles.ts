import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const BORDER_STYLE = `1px solid ${theme.colors.black}`;
// export const BORDER_STYLE = `4px solid ${theme.colors.black}`;

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
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
