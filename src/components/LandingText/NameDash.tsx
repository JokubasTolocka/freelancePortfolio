import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledSVG = styled(motion.svg)`
  position: absolute;
  right: 190px;
  top: 38px;
  overflow: visible;
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
    strokeWidth: 8,
    stroke: theme.colors.white,
    variants: animationStates,
    strokeDasharray: "0 1",
  };

  return (
    <StyledSVG
      width="89"
      height="7"
      viewBox="0 0 89 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mymask" height={6} y="-50%">
        <motion.path
          d="M2.00046 5.41306C30.5953 1.3126 58.4331 1.09164 86.5852 4.58255"
          strokeLinecap="round"
          {...animationProps}
        />
      </mask>
      <path
        d="M2.00046 5.41306C30.5953 1.3126 58.4331 1.09164 86.5852 4.58255"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="6 6"
        stroke={theme.colors.complimentary.green}
        fill={theme.colors.white}
        mask="url(#mymask)"
        strokeWidth={3}
      />
    </StyledSVG>
  );
};

export default NameDash;
