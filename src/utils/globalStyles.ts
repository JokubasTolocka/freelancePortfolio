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
    max-width: 1600px;
    margin: 0 auto;
    border-left: ${({ theme }) => `4px solid ${theme.colors.black}`};
    border-right: ${({ theme }) => `4px solid ${theme.colors.black}`};
  }
  
  @media only screen and (max-width: 1600px) {
    #___gatsby {
        border-left: none;
        border-right: none;
    }
  }
`;

export default GlobalStyle;
