import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import Typography, { Body, Heading } from "../Typography";
import { motion, useAnimate, useInView, Variants } from "framer-motion";
import ArrowRight from "../../assets/icons/arrowRight.svg";
import ChipList from "../ChipList";
import CardWrapper from "./CardWrapper";

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkTo: string;
  tags?: string[];
};

const Card = ({ title, subtitle, imageSrc, linkTo, tags }: Props) => {
  const theme = useTheme();

  const animationTransition = {
    transition: {
      duration: 0.3,
    },
  };

  const bgColorVariants: Variants = {
    initial: {
      backgroundColor: theme.colors.black.light,
      ...animationTransition,
    },
    whileHover: {
      backgroundColor: theme.colors.black.mid,
      ...animationTransition,
    },
  };

  const arrowVariants = {
    initial: {
      opacity: 0,
      x: -16,
      y: 16,
      ...animationTransition,
    },
    whileHover: {
      opacity: 100,
      x: 0,
      y: 0,
      ...animationTransition,
    },
  };

  return (
    <CardWrapper>
      <Wrapper
        href={linkTo}
        initial="initial"
        whileHover="whileHover"
        variants={bgColorVariants}
      >
        <ImageWrapper>
          <Image src={imageSrc} />
        </ImageWrapper>
        <ContentWrapper>
          <LeftContent>
            <Typography variant={Heading.H3}>{title}</Typography>
            <SubtitleWrapper>
              <Typography variant={Body.MD}>{subtitle}</Typography>
            </SubtitleWrapper>
            {tags?.length && <ChipList items={tags} />}
          </LeftContent>
          <motion.div variants={arrowVariants}>
            <StyledArrow />
          </motion.div>
        </ContentWrapper>
      </Wrapper>
    </CardWrapper>
  );
};

export default Card;

// https://www.studiogusto.com/studio

export const CARD_HEIGHT = 300;

const Wrapper = styled(motion.a)`
  width: 100%;
  height: ${CARD_HEIGHT}px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 20px;
  padding: 20px 0;
  transform-origin: bottom center;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  margin-right: 84px;
  justify-content: space-between;
  align-items: center;
`;

const SubtitleWrapper = styled.div`
  max-width: 460px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-left: 20px;
`;

const Image = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledArrow = styled(ArrowRight)`
  height: 48px;
  width: 48px;
  fill: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  transform: rotate(-45deg);
`;
