import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePos from "../../hooks/useMousePos";
import Content from "./Content";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const BlackMaskWrapper = styled(Wrapper)`
  position: absolute;
  z-index: 3;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  -webkit-mask: url("./cursorMask.svg");
  mask-repeat: no-repeat;

  svg {
    stroke: ${({ theme }) => theme.colors.white};
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const BlueMaskWrapper = styled(BlackMaskWrapper)`
  background-color: ${({ theme }) => theme.colors.complimentary.blue};
  z-index: 2;
`;

const ClipContent = styled.div`
  overflow: hidden;
  position: relative;
`;

const FULL_CIRCLE_SIZE = 2000;

const Header = () => {
  const { x, y } = useMousePos();
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [{ savedX, savedY }, setSavedPosition] = useState({
    savedX: 0,
    savedY: 0,
  });

  const CIRCLE_SIZE = isMouseHovering ? FULL_CIRCLE_SIZE : 0;

  const onMouseEnter = () => {
    setSavedPosition({ savedX: x, savedY: y }); // Save the current position on hover
    setIsMouseHovering(true);
  };

  const onMouseLeave = () => {
    setSavedPosition({ savedX: x, savedY: y }); // Save the exit position
    setIsMouseHovering(false);
  };

  const animationProps = {
    as: motion.div,
    animate: {
      WebkitMaskSize: `${CIRCLE_SIZE}px`,
      WebkitMaskPosition: `${savedX - CIRCLE_SIZE / 2}px ${
        savedY - CIRCLE_SIZE / 2
      }px`,
    },
    transition: { type: "tween", ease: "easeIn" },
  };

  return (
    <ClipContent>
      <Wrapper>
        <Content />
      </Wrapper>
      <BlackMaskWrapper
        {...{
          ...animationProps,
          transition: { ...animationProps.transition, delay: 0.2 },
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Content />
      </BlackMaskWrapper>
      <BlueMaskWrapper {...animationProps}>
        <Content />
      </BlueMaskWrapper>
    </ClipContent>
  );
};

export default Header;
