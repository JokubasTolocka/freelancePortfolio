import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const AnimatedLine = () => {
  return (
    <WrapperSVG
      width="1280"
      height="217"
      viewBox="0 0 1280 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M-48 177.167C-10.9517 192.133 83.5 245.667 170.212 189.4C233.122 148.578 370.437 34.2924 355.318 152.664C340.199 271.035 506.12 183.528 652.794 94.2942C784.5 14.167 1006.66 -69.7931 920.849 104.09C835.039 277.974 1245.7 162.052 1383 3.27068"
        stroke="current"
        strokeWidth="4"
      />
    </WrapperSVG>
  );
};

export default AnimatedLine;

const WrapperSVG = styled(motion.svg)`
  position: absolute;
  width: 100%;
  top: 255px;
`;

const Path = styled(motion.path)`
  stroke: #9bceff;
`;
