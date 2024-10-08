import React, { useState } from "react";
import styled from "styled-components";
import Typography from "./typography/HeadingTypography";
import Squiggle from "./Squiggle";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";
import useMousePos from "../hooks/useMousePos";

const Wrapper = styled.div`
  padding: 0 32px;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
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

  const CIRCLE_SIZE = isMouseHovering ? 1000 : 1;

  return (
    <>
      <Wrapper>
        <Typography variant="Heading4">Let's do it.</Typography>
        <RightContainer>
          <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
          <Squiggle />
          <SocialMedia />
        </RightContainer>
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
        onMouseEnter={() => {
          setIsMouseHovering(true);
        }}
        onMouseLeave={() => {
          setIsMouseHovering(false);
        }}
      >
        <Typography variant="Heading4">Let's do it.</Typography>
        <RightContainer>
          <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
          <Squiggle />
          <SocialMedia />
        </RightContainer>
      </MaskWrapper>
    </>
  );
};

export default Header;
