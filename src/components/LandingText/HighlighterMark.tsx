import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: absolute;
  right: 110px;
  top: 83px;
  overflow: visible;
`;

const Mark = styled(motion.div)`
  background-color: rgba(246, 106, 176, 0.3);
  height: 35px;
  width: 166px;
  transform-origin: 0;
`;

const HighlighterMark = () => {
  const highlighterAnimationProps = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: {
      duration: 0.25,
      ease: [0, 0.1, 0.3, 1],
      delay: 7,
    },
  };

  return (
    <Wrapper whileHover={{ rotate: -4 }} style={{ rotate: -2 }}>
      <Mark {...highlighterAnimationProps} />
    </Wrapper>
  );
};

export default HighlighterMark;
