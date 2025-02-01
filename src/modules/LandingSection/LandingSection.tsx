import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header/Header";
import Typography, { Body, Heading } from "../../components/Typography";
import AnimatedLetters from "../../components/AnimatedLetters";
import MatterCanvas from "./MatterCanvas/MatterCanvas";
import { motion, useAnimate } from "motion/react";
import AnimatedLine from "./AnimatedLine";
import { useGlobalContext } from "../../contexts/GlobalContext/useGlobalContext";

export const FALL_ANIMATION_DELAY_SECONDS = 1;

const LandingSection = () => {
  const { shouldExplode } = useGlobalContext();

  const theme = useTheme();
  const typographyRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();

  useEffect(() => {
    if (typographyRef.current && shouldExplode) {
      animate(typographyRef.current, { color: theme.colors.black.light });
    }
  }, [shouldExplode]);

  const INITIAL_DELAY = 0.3;

  return (
    <Wrapper>
      <AnimatedLine />
      {/* <MatterCanvas /> */}
      <Content>
        <LandingHeaderTypography
          variant={Body.Heading}
          passedRef={typographyRef}
        >
          <AnimatedLetters>
            I'm <Typography variant={Heading.H1}>Jacob,</Typography>
          </AnimatedLetters>
          <AnimatedLetters delayChildren={INITIAL_DELAY}>
            a <Typography variant={Heading.H1}>web creator</Typography> crafting
          </AnimatedLetters>
          <AnimatedLetters delayChildren={INITIAL_DELAY * 2}>
            <Typography variant={Heading.H1}>user experiences</Typography>{" "}
            through
          </AnimatedLetters>
          <AnimatedLetters delayChildren={INITIAL_DELAY * 3}>
            <Typography variant={Heading.H1}>design</Typography> and{" "}
            <Typography variant={Heading.H1}>code</Typography>
          </AnimatedLetters>
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
                delay: FALL_ANIMATION_DELAY_SECONDS,
              },
            },
          }}
        >
          <Typography variant={Heading.H5}>
            Find work examples below.
          </Typography>
        </InfoTextWrapper>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  user-select: none;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 40px 0 40px;
  position: relative;
  padding-top: 40px;
  padding-bottom: 80px;
  height: 100%;
  pointer-events: none;
`;

const LandingHeaderTypography = styled(Typography)`
  width: fit-content;
`;

const InfoTextWrapper = styled(motion.div)`
  /* position: absolute;
  z-index: 9999;
  bottom: 80px; */
  /* padding: 2px 12px; */
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  /* -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px); */
`;
