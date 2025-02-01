import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MAX_SITE_WIDTH } from "../utils/globalStyles";
import Footer from "./Footer";
import Header from "./Header/Header";
import HeaderTitleContextProvider from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
// @ts-ignore
// import { ReactLenis } from "lenis/react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <HeaderTitleContextProvider>
      {/* <ReactLenis root> */}
      {/* <Wrapper>
        <Header />
        {children}
      </Wrapper> */}
      <Footer />
      {/* </ReactLenis> */}
    </HeaderTitleContextProvider>
  );
};

export default Layout;

const Wrapper = styled.div`
  max-width: ${MAX_SITE_WIDTH}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  scroll-behavior: smooth;
`;
