import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterAni = {
  // initial: { y: 100 },
  // animate: {
  //   y: 0,
  //   transition: { duration: 0.35, ease: "easeInOut" },
  // },
  initial: {
    scaleY: 0,
    // filter: "blur(50px)",
    // opacity: 0,
    // skewY: "-130deg",
  },
  animate: {
    scaleY: 1,
    // filter: "blur(0px)",
    // opacity: 100,
    // skewY: "0",
    transition: {
      // duration: 3,
      duration: 1,
      type: "spring",
      // stiffness: 100,
      // damping: 9,
      // mass: 0.05,
    },
  },
};

const WhiteSpace = styled.span`
  display: inline-block;
  width: 26px;
`;

const INITIAL_ANIMATION_DELAY = 0;

const getAnimationDelay = (seconds: number) =>
  INITIAL_ANIMATION_DELAY + seconds;

type Props = {
  title: string;
  delayChildren?: number;
};

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

const Letter = styled(motion.span)`
  transform: auto;
  display: inline-block;
  transform-origin: center 100px;
  /* transform: skewY(-5deg); */
`;

const Wrapper = styled(motion.span)`
  /* overflow: hidden; */
  display: flex;
  height: 130px;
  width: fit-content;
  /* transform: rotate3d(1, 1, 1, 45deg); */
`;
