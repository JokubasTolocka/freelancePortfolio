import { motion, Variants } from "motion/react";
import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

const banner = {
  // animate: {
  //   transition: {
  //     staggerChildren: 0.03,
  //   },
  // },
};

const letterAnimation: Variants = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
  // initial: {
  //   scaleY: 0,
  //   // filter: "blur(50px)",
  //   // opacity: 0,
  //   // skewY: "-130deg",
  // },
  // animate: {
  //   scaleY: 1,
  //   // filter: "blur(0px)",
  //   // opacity: 100,
  //   // skewY: "0",
  //   transition: {
  //     // duration: 3,
  //     duration: 1,
  //     type: "spring",
  //     // stiffness: 100,
  //     // damping: 9,
  //     // mass: 0.05,
  //   },
  // },
};

const WhiteSpace = styled.span`
  display: inline-block;
  width: 26px;
`;

const INITIAL_ANIMATION_DELAY = 0;

const getAnimationDelay = (seconds: number) =>
  INITIAL_ANIMATION_DELAY + seconds;

interface Props extends PropsWithChildren {
  delayChildren?: number;
}

const getTextFromChildren = (children: ReactNode) => {
  if (typeof children === "string")
    return [...children].map((symbol) => ({ fontWeight: 300, symbol })).flat();

  if (Array.isArray(children)) {
    const textArr = children.map((child: ReactNode) => {
      if (typeof child === "string")
        return [...child].map((symbol) => ({ fontWeight: 300, symbol }));
      if (React.isValidElement(child)) {
        const elementText = child.props.children;
        return [...elementText].map((symbol) => {
          return {
            fontWeight: 400,
            symbol,
          };
        });
      }
    });

    return textArr.flat();
  }

  return undefined;
};

const AnimatedLetters = ({ children, delayChildren = 0 }: Props) => {
  const text = getTextFromChildren(children);

  if (!text) return;

  return (
    <Wrapper
      variants={{
        ...banner,
        animate: {
          transition: {
            // ...banner.animate.transition,
            delayChildren: getAnimationDelay(delayChildren),
          },
        },
      }}
      initial="initial"
      animate="animate"
    >
      {text.map(
        (letter, index) =>
          letter && (
            <Letter
              key={index}
              variants={letterAnimation}
              $fontWeight={letter.fontWeight}
              className="letter"
            >
              {letter.symbol === " " ? <WhiteSpace /> : letter.symbol}
            </Letter>
          )
      )}
    </Wrapper>
  );
};
export default AnimatedLetters;

const Letter = styled(motion.span)<{ $fontWeight: number }>`
  transform: auto;
  display: inline-block;
  transform-origin: center 100px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  /* transform: skewY(-5deg); */
`;

const Wrapper = styled(motion.span)`
  overflow: hidden;
  display: flex;
  height: 95px;
  margin-bottom: 10px;
  width: fit-content;
  /* transform: rotate3d(1, 1, 1, 45deg); */
`;
