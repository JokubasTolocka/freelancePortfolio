import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledStarSVG = styled(motion.svg)`
  position: absolute;
  right: 0px;
  top: 38px;
`;

const Star = () => {
  const theme = useTheme();

  const starAnimationProps = {
    initial: { scale: 0, rotate: 45 },
    animate: { scale: 1, rotate: 0 },
    transition: {
      duration: 0.2,
      type: "spring",
      delay: 5,
      bounceStiffness: 100,
      damping: 4,
    },
    stroke: theme.colors.complimentary.blue,
    strokeWidth: 3,
  };

  return (
    <StyledStarSVG
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...starAnimationProps}
    >
      <path
        d="M17.6739 1.74219C16.8151 5.69871 12.4779 13.6117 2 13.6117"
        stroke-linecap="round"
      />
      <path
        d="M17.6745 29.59C18.2832 25.6842 21.3571 17.8726 28.7832 17.8726"
        stroke-linecap="round"
      />
      <path
        d="M17.6745 1.59003C18.2832 7.01756 21.3571 17.8726 28.7832 17.8726"
        stroke-linecap="round"
      />
      <path
        d="M17.6739 29.59C16.8151 24.2639 12.4779 13.6118 2 13.6118"
        stroke-linecap="round"
      />
    </StyledStarSVG>
  );
};

export default Star;
