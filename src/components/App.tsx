import React from "react";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "./Header/Content";
import Heyo from "./Heyo";
import HeyoUnderline from "./HeyoUnderline";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
`;

const App = () => (
  <LandingContainer>
    <Heyo />
    <HeyoUnderline />
  </LandingContainer>
);

export default App;
