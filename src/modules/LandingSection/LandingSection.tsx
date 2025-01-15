import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header/Header";
import Typography, { Heading } from "../../components/Typography";
import AnimatedLetters from "../../components/AnimatedLetters";
import MatterCanvas from "./MatterCanvas/MatterCanvas";
import { motion, useAnimate } from "framer-motion";
import { BORDER_STYLE } from "../../utils/globalStyles";

const LANDING_FONT_WEIGHT = 400;
export const FALL_ANIMATION_DELAY_SECONDS = 1.4;

const LandingSection = () => {
  const theme = useTheme();
  const typographyRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();

  useEffect(() => {
    if (typographyRef.current) {
      // animate(
      //   typographyRef.current,
      //   { color: theme.colors.black.light },
      //   { delay: FALL_ANIMATION_DELAY_SECONDS }
      // );
    }
  }, []);

  const INITIAL_DELAY = 0.15;

  return (
    <Wrapper>
      <MatterCanvas />
      <Content>
        <LandingHeaderTypography variant={Heading.H1} passedRef={typographyRef}>
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
        <InfoTextWrapper
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 100,
              y: 0,
              transition: {
                ease: "easeOut",
                duration: 0.5,
                delay: FALL_ANIMATION_DELAY_SECONDS + 1,
              },
            },
          }}
        >
          <Typography variant={Heading.H5} isBody>
            Find work examples below.
          </Typography>
        </InfoTextWrapper>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;

const Wrapper = styled.div`
  border-bottom: ${BORDER_STYLE};
  position: relative;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  user-select: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 40px 0 40px;
  z-index: 2;
  position: relative;
  padding-top: 40px;
  padding-bottom: 80px;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
`;

const LandingHeaderTypography = styled(Typography)`
  font-weight: ${LANDING_FONT_WEIGHT};
  width: fit-content;
`;

const InfoTextWrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
`;
