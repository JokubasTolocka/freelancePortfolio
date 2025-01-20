import React, { MouseEvent, PropsWithChildren, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion, useAnimate } from "framer-motion";
import CopyIcon from "../assets/icons/copy.svg";
import constants from "../constants/constants.json";

const CIRCLE_SIZE = 100;

const Circle = styled(motion.div)`
  pointer-events: none;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE}px;
  background-color: ${({ theme }) => theme.colors.black.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCopyIcon = styled(CopyIcon)`
  width: 58px;
  aspect-ratio: 1;
  fill: ${({ theme }) => theme.colors.white};
`;

const CopyOverlayContainer = ({ children }: PropsWithChildren) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePosition] = useState({ x: 0, y: 0 });
  const [_, animate] = useAnimate();
  const theme = useTheme();

  const setHovering = (e: MouseEvent<HTMLDivElement>) => {
    if (circleRef.current)
      animate(circleRef.current, { scale: 1 }, { duration: 0.1 });
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  const clearHovering = (e: MouseEvent<HTMLDivElement>) => {
    if (circleRef.current)
      animate(
        circleRef.current,
        {
          scale: 0,
          backgroundColor: theme.colors.black.dark,
        },
        { duration: 0.15 }
      );
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(constants.EMAIL).then(() => {
      if (circleRef.current)
        animate(
          circleRef.current,
          { backgroundColor: theme.colors.success },
          { duration: 0.2 }
        );
    });
  };

  return (
    <motion.div
      onMouseMove={setHovering}
      onMouseLeave={clearHovering}
      onClick={handleCopy}
    >
      <Circle
        ref={circleRef}
        style={{
          position: "absolute",
          top: mousePos.y - CIRCLE_SIZE / 2,
          left: mousePos.x - CIRCLE_SIZE / 2,
          transformOrigin: `${CIRCLE_SIZE / 2}px ${CIRCLE_SIZE / 2}px`,
        }}
      >
        <StyledCopyIcon />
      </Circle>
      {children}
    </motion.div>
  );
};

export default CopyOverlayContainer;
