import React from "react";
import Typography from "../components/Typography";
import styled from "styled-components";
import { motion } from "framer-motion";
import Star from "../components/LandingText/Star";
import NameDash from "../components/LandingText/NameDash";
import HighlighterMark from "../components/LandingText/HighlighterMark";
import AnimatedLetters from "../components/LandingText/AnimatedLetters";
import BottomLine from "../components/LandingText/BottomLine";

const Wrapper = styled(motion.div)`
  text-align: center;
  max-width: 570px;
  margin-top: 220px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LandingText = () => (
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
      <BottomLine />
    </Wrapper>
  </Typography>
);

export default LandingText;
