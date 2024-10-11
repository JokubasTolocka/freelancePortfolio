import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 3,
    },
  },
};

const letterAni = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0 } },
};

type Props = {
  title: string;
  delayChildren?: number;
};

const WhiteSpace = styled.span`
  display: inline-block;
  width: 10px;
`;

const Letter = styled(motion.span)`
  transform: auto;
  display: inline-block;
`;

const INITIAL_ANIMATION_DELAY = 3;

const getAnimationDelay = (seconds: number) =>
  INITIAL_ANIMATION_DELAY + seconds;

const AnimatedLetters = ({ title, delayChildren = 0 }: Props) => (
  <motion.span
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
      <Letter key={index} variants={letterAni}>
        {letter === " " ? <WhiteSpace /> : letter}
      </Letter>
    ))}
  </motion.span>
);
export default AnimatedLetters;
