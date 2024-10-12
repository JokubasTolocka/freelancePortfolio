import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyledSVG = styled(motion.svg)`
  margin-top: 16px;
`;

const HeyoUnderline = () => {
  const line = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  const animationProps = {
    initial: "hidden",
    animate: "visible",
    transition: { delay: 1.5 },
    stroke: "black",
    strokeWidth: 3,
    strokeDasharray: "0 1",
    variants: line,
  };

  return (
    <StyledSVG
      width="584"
      height="25"
      viewBox="0 0 584 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        {...animationProps}
        d="M1 19C60.3333 12.6667 258.9 0.400003 578.5 2"
        strokeLinecap="round"
      />
    </StyledSVG>
  );
};

export default HeyoUnderline;
