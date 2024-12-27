import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header/Header";
import Typography from "../../components/Typography";
import AnimatedLetters from "../../components/AnimatedLetters";
import MatterCanvas from "./MatterCanvas/MatterCanvas";
import { useAnimate } from "framer-motion";

const Wrapper = styled.div`
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  position: relative;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  user-select: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 64px 64px 64px;
  z-index: 2;
  position: relative;
  padding-top: 64px;
  color: ${({ theme }) => theme.colors.black};
`;

const LandingHeaderTypography = styled(Typography)`
  font-weight: 500;
  width: fit-content;
`;

export const FALL_ANIMATION_DELAY_SECONDS = 1.1;

const LandingSection = () => {
  const theme = useTheme();
  const typographyRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();

  useEffect(() => {
    if (typographyRef.current)
      animate(
        typographyRef.current,
        { color: theme.colors.gray },
        { delay: FALL_ANIMATION_DELAY_SECONDS }
      );
  }, []);

  const INITIAL_DELAY = 0.15;

  return (
    <Wrapper>
      <MatterCanvas />
      <Content>
        <LandingHeaderTypography variant="Header" passedRef={typographyRef}>
          <AnimatedLetters title="I'm Jacob" />
          <AnimatedLetters
            title="a web creator crafting"
            delayChildren={INITIAL_DELAY}
          />
          <AnimatedLetters
            title="user experiences through"
            delayChildren={INITIAL_DELAY * 2}
          />
          <AnimatedLetters
            title="design and code"
            delayChildren={INITIAL_DELAY * 3}
          />
        </LandingHeaderTypography>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;
