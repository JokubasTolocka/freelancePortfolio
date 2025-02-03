import React from "react";
import Typography, { Heading } from "../../../components/Typography";
import styled from "styled-components";
import ArrowRight from "../../../assets/icons/arrowRight.svg";
import { motion } from "motion/react";

const Wrapper = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const IconWrapper = styled(motion.div)`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const StyledArrowRight = styled(ArrowRight)`
  fill: ${({ theme }) => theme.colors.white};
  width: 36px;
  height: 36px;
`;

interface Props {
  title?: string;
}

const BrowseAllWorkButton = ({ title }: Props) => (
  <Wrapper href="/" initial="initial" whileHover="hovered">
    <Typography variant={Heading.H4}>{title ?? "Browse all"}</Typography>
    <IconWrapper
      transition={{ duration: 0.2 }}
      variants={{
        initial: { x: 0 },
        hovered: { x: 10 },
      }}
    >
      <StyledArrowRight />
    </IconWrapper>
  </Wrapper>
);

export default BrowseAllWorkButton;
