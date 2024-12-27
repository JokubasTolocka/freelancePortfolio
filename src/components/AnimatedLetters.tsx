import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const letterAni = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

type Props = {
  title: string;
  delayChildren?: number;
};

const WhiteSpace = styled.span`
  display: inline-block;
  width: 26px;
`;

const Letter = styled(motion.span)`
  transform: auto;
  display: inline-block;
`;

const Wrapper = styled(motion.span)`
  overflow: hidden;
  display: flex;
  height: 130px;
  width: fit-content;
`;

const INITIAL_ANIMATION_DELAY = 0;

const getAnimationDelay = (seconds: number) =>
  INITIAL_ANIMATION_DELAY + seconds;

const AnimatedLetters = ({ title, delayChildren = 0 }: Props) => (
  <Wrapper
    variants={{
      ...banner,
      animate: {
        transition: {
          ...banner.animate.transition,
          delayChildren: getAnimationDelay(delayChildren),
        },
      },
    }}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <Letter key={index} variants={letterAni} className="letter">
        {letter === " " ? <WhiteSpace /> : letter}
      </Letter>
    ))}
  </Wrapper>
);
export default AnimatedLetters;
