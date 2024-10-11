import React from "react";
import Typography from "../components/Typography";
import styled from "styled-components";
import { motion } from "framer-motion";
import Star from "../components/LandingText/Star";
import NameDash from "../components/LandingText/NameDash";
import HighlighterMark from "../components/LandingText/HighlighterMark";
import AnimatedLetters from "../components/LandingText/AnimatedLetters";

const Wrapper = styled(motion.div)`
  text-align: center;
  max-width: 570px;
  margin-top: 220px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
`;

const BottomLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LandingText = () => {
  return (
    <Typography variant="Subtitle" isBody>
      <Wrapper>
        <AnimatedLetters title="I'm Jacob," />
        <NameDash />
        <AnimatedLetters
          title="a multidisciplinary web creator"
          delayChildren={1}
        />
        <Star />
        <AnimatedLetters
          title="crafting user experiences through"
          delayChildren={2}
        />
        <HighlighterMark />
        <BottomLineWrapper>
          <AnimatedLetters title="design " delayChildren={3} />
          <AnimatedLetters title="and programming." delayChildren={3.15} />
        </BottomLineWrapper>
      </Wrapper>
    </Typography>
  );
};

export default LandingText;
