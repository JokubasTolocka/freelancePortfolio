import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePos from "../../hooks/useMousePos";
import Content from "./Content";

const Wrapper = styled.div`
  padding: 0 32px;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const MaskWrapper = styled(Wrapper)`
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  mask: url("./cursorMask.svg");
  mask-repeat: no-repeat;

  svg {
    stroke: ${({ theme }) => theme.colors.white};
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const Header = () => {
  const { x, y } = useMousePos();
  const [isMouseHovering, setIsMouseHovering] = useState(false);

  const CIRCLE_SIZE = isMouseHovering ? 1000 : 0;

  const onMouseEnter = () => setIsMouseHovering(true);
  const onMouseLeave = () => setIsMouseHovering(false);

  return (
    <>
      <Wrapper>
        <Content />
      </Wrapper>
      <MaskWrapper
        as={motion.div}
        animate={{
          WebkitMaskSize: `${CIRCLE_SIZE}px`,
          WebkitMaskPosition: `${x - CIRCLE_SIZE / 2}px ${
            y - CIRCLE_SIZE / 2
          }px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Content />
      </MaskWrapper>
    </>
  );
};

export default Header;
