import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import ColorPallete from "../../assets/icons/colorPallete.svg";
import BoyLaptop from "../../assets/icons/boyLaptop.svg";
import AnimatedLetters from "./AnimatedLetters";

const BottomLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorPalleteWrapper = styled(motion.div)`
  position: absolute;
  right: 300px;
  bottom: -5px;
`;

const BoyLaptopWrapper = styled(motion.div)`
  position: absolute;
  right: 18px;
  bottom: -5px;
`;

const iconSize = css`
  width: 32px;
  height: 32px;
`;

const StyledColorPallete = styled(ColorPallete)`
  ${iconSize}
`;

const StyledBoyLaptop = styled(BoyLaptop)`
  ${iconSize}
`;

const designAnimationProps = {
  animate: { x: -32 },
  transition: {
    delay: 7,
    type: "tween",
  },
};

const colorPalleteAnimationProps = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { delay: 7.2 },
};

const andProgrammingAnimationProps = {
  animate: { x: 3 },
  transition: {
    delay: 7,
    type: "tween",
  },
};

const boyLaptopAnimationProps = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { delay: 7.4 },
};

const BottomLine = () => (
  <BottomLineWrapper>
    <motion.div {...designAnimationProps}>
      <AnimatedLetters title="design " delayChildren={3} />
    </motion.div>
    <ColorPalleteWrapper {...colorPalleteAnimationProps}>
      <StyledColorPallete />
    </ColorPalleteWrapper>
    <motion.div {...andProgrammingAnimationProps}>
      <AnimatedLetters title="and programming" delayChildren={3.15} />
    </motion.div>
    <BoyLaptopWrapper {...boyLaptopAnimationProps}>
      <StyledBoyLaptop />
    </BoyLaptopWrapper>
  </BottomLineWrapper>
);

export default BottomLine;
