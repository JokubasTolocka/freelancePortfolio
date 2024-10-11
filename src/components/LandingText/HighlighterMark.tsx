import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  transform: rotate(-2deg);
  position: absolute;
  right: 122px;
  top: 95px;
  overflow: visible;
`;

const Mark = styled(motion.div)`
  background-color: rgba(246, 106, 176, 0.3);
  height: 37px;
  width: 196px;
  transform-origin: 0;
`;

const HighlighterMark = () => {
  const highlighterAnimationProps = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: {
      duration: 0.25,
      ease: [0, 0.1, 0.3, 1],
      delay: 6,
    },
  };

  return (
    <Wrapper>
      <Mark {...highlighterAnimationProps} />
    </Wrapper>
  );
};

export default HighlighterMark;
