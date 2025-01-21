import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { MAX_SITE_WIDTH } from "../utils/globalStyles";
import Footer from "./Footer";
import Header from "./Header/Header";
import HeaderTitleContextProvider from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const Layout = ({ children }: PropsWithChildren) => (
  <HeaderTitleContextProvider>
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </HeaderTitleContextProvider>
);

export default Layout;

const Wrapper = styled.div`
  max-width: ${MAX_SITE_WIDTH}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
`;
