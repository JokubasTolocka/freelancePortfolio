import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import ColorPallete from "../../assets/colorPallete.svg";
import BoyLaptop from "../../assets/boyLaptop.svg";
import AnimatedLetters from "./AnimatedLetters";

const BottomLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorPalleteWrapper = styled(motion.div)`
  position: absolute;
  right: 338px;
`;

const BoyLaptopWrapper = styled(motion.div)`
  position: absolute;
  right: 17px;
`;

const iconSize = css`
  width: 40px;
  height: 40px;
`;

const StyledColorPallete = styled(ColorPallete)`
  ${iconSize}
`;

const StyledBoyLaptop = styled(BoyLaptop)`
  ${iconSize}
`;

const BottomLine = () => (
  <BottomLineWrapper>
    <motion.div animate={{ x: -38 }} transition={{ delay: 7, type: "tween" }}>
      <AnimatedLetters title="design " delayChildren={3} />
    </motion.div>
    <ColorPalleteWrapper
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 7.2 }}
    >
      <StyledColorPallete />
    </ColorPalleteWrapper>
    <motion.div animate={{ x: 5 }} transition={{ delay: 7, type: "tween" }}>
      <AnimatedLetters title="and programming" delayChildren={3.15} />
    </motion.div>
    <BoyLaptopWrapper
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 7.5 }}
    >
      <StyledBoyLaptop />
    </BoyLaptopWrapper>
  </BottomLineWrapper>
);

export default BottomLine;
