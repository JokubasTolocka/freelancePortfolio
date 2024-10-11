import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePos from "../../hooks/useMousePos";
import Content from "./Content";
import Mask from "./Mask";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const BlackMaskWrapper = styled(Wrapper)`
  position: absolute;
  top: 100;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  -webkit-mask: url("./circleMask.svg");
  mask-repeat: no-repeat;

  svg {
    stroke: ${({ theme: { colors } }) => colors.white};
    fill: ${({ theme: { colors } }) => colors.white};
  }
`;

const ClipContent = styled.div`
  overflow: hidden;
  position: relative;
`;

const FULL_CIRCLE_SIZE = 400;

const Header = () => {
  const { x, y } = useMousePos();
  const [isMouseHovering, setIsMouseHovering] = useState(false);

  const CIRCLE_SIZE = isMouseHovering ? FULL_CIRCLE_SIZE : 0;

  const onMouseEnter = () => setIsMouseHovering(true);

  const onMouseLeave = () => setIsMouseHovering(false);

  const animationProps = {
    as: motion.div,
    animate: {
      WebkitMaskSize: `${CIRCLE_SIZE}px`,
      WebkitMaskPosition: `${x - CIRCLE_SIZE / 2}px ${y - CIRCLE_SIZE / 2}px`,
      top: 0,
    },
    transition: { type: "tween", ease: "easeIn" },
  };

  return (
    <ClipContent>
      <Wrapper>
        <Content />
      </Wrapper>
      <BlackMaskWrapper
        {...animationProps}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Content />
      </BlackMaskWrapper>
    </ClipContent>
  );
};

export default Header;
