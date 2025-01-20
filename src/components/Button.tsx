import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typography, { Heading } from "./Typography";
import FlipText from "./FlipTextAnimation";
import ArrowRight from "../assets/icons/arrowRight.svg";

const StyledButton = styled(motion.button)`
  color: ${({ theme }) => theme.colors.black.dark};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  width: fit-content;
  height: fit-content;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const StyledArrowRight = styled(ArrowRight)`
  fill: ${({ theme }) => theme.colors.black.dark};
  width: 26px;
  height: 26px;
`;

type Props = {
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: PropsWithChildren<Props>) => {
  return (
    <StyledButton
      type="button"
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className={className}
    >
      <Typography variant={Heading.H5}>{children}</Typography>
      <IconWrapper
        transition={{ duration: 0.2 }}
        variants={{
          initial: { x: 0 },
          hovered: { x: 10 },
        }}
      >
        <StyledArrowRight />
      </IconWrapper>
    </StyledButton>
  );
};

export default Button;
