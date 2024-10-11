import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledSVG = styled(motion.svg)`
  position: absolute;
  right: 200px;
  top: 38px;
`;

const animationStates = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

const NameDash = () => {
  const theme = useTheme();

  const animationProps = {
    initial: "hidden",
    animate: "visible",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: 3.2,
    },
    stroke: theme.colors.complimentary.green,
    strokeWidth: 3,
    variants: animationStates,
  };

  return (
    <StyledSVG
      width="89"
      height="7"
      viewBox="0 0 89 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2.00046 5.41306C30.5953 2.3126 58.4331 1.09164 86.5852 4.58255"
        stroke-linecap="round"
        {...animationProps}
        strokeDasharray="6 6"
      />
    </StyledSVG>
  );
};

export default NameDash;
