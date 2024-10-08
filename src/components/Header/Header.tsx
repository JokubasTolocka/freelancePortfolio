import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePos from "../../hooks/useMousePos";
import Content from "./Content";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const MaskWrapper = styled(Wrapper)`
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

const ClipContent = styled.div`
  overflow: hidden;
  position: relative;
`;

const FULL_CIRCLE_SIZE = 2000;

const CircleBase = styled.div`
  border-radius: ${FULL_CIRCLE_SIZE}px;
  position: absolute;
`;

const CircleYellow = styled(CircleBase)`
  background-color: ${({ theme }) => theme.colors.complimentary.yellow};
  zindex: 1;
`;

const CircleGreen = styled(CircleBase)`
  background-color: ${({ theme }) => theme.colors.complimentary.green};
  zindex: 2;
`;

const CircleBlue = styled(CircleBase)`
  background-color: ${({ theme }) => theme.colors.complimentary.blue};
  zindex: 3;
`;

const Header = () => {
  const { x, y } = useMousePos();
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [{ x: savedX, y: savedY }, setSavedFirstPosition] = useState({
    x: 0,
    y: 0,
  });

  const CIRCLE_SIZE = isMouseHovering ? FULL_CIRCLE_SIZE : 0;

  const onMouseEnter = () => {
    setSavedFirstPosition({ x, y });
    setIsMouseHovering(true);
  };
  const onMouseLeave = () => {
    setSavedFirstPosition({ x, y });
    setIsMouseHovering(false);
  };

  console.log({ x, y, savedX, savedY });

  return (
    <ClipContent>
      <Wrapper>
        <Content />
      </Wrapper>
      <CircleBlue
        as={motion.div}
        animate={{
          top: savedY - CIRCLE_SIZE / 2,
          left: savedX - CIRCLE_SIZE / 2,
          height: CIRCLE_SIZE,
          width: CIRCLE_SIZE,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
      <MaskWrapper
        as={motion.div}
        animate={{
          WebkitMaskSize: `${CIRCLE_SIZE}px`,
          WebkitMaskPosition: `${savedX - CIRCLE_SIZE / 2}px ${
            savedY - CIRCLE_SIZE / 2
          }px`,
        }}
        transition={{ type: "tween", ease: "easeIn", delay: 0.2 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Content />
      </MaskWrapper>
    </ClipContent>
  );
};

export default Header;
