import React, { PropsWithChildren, useRef, useState } from "react";
import useMousePos from "../hooks/useMousePos";
import styled from "styled-components";
import { motion } from "framer-motion";
import CopyIcon from "../assets/icons/copy.svg";

const CIRCLE_SIZE = 100;

const Circle = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.black.dark};
  position: absolute;
  border-radius: ${CIRCLE_SIZE}px;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  aspect-ratio: 1;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledCopyIcon = styled(CopyIcon)`
  width: 58px;
  aspect-ratio: 1;
  fill: ${({ theme }) => theme.colors.white};
`;

const CopyOverlayContainer = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useMousePos();

  const setHovering = () => setIsHovering(true);
  const clearHovering = () => setIsHovering(false);

  // console.log({ isHovering, mousePos });

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={setHovering}
      onMouseLeave={clearHovering}
      initial="initial"
      whileHover="whileHover"
    >
      {isHovering && (
        <Circle
          style={{
            top: mousePos.y - CIRCLE_SIZE / 2,
            left: mousePos.x - CIRCLE_SIZE / 2,
          }}
          transition={{ duration: 0.2 }}
          //   variants={{
          //     initial: { width: 0 },
          //     whileHover: { width: CIRCLE_SIZE },
          //   }}
        >
          <StyledCopyIcon />
        </Circle>
      )}
      {children}
    </motion.div>
  );
};

export default CopyOverlayContainer;
