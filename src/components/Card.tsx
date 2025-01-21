import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import Typography, { Body, Heading } from "./Typography";
import { motion, useAnimate, useInView, Variants } from "framer-motion";
import ArrowRight from "../assets/icons/arrowRight.svg";
import ChipList from "./ChipList";

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkTo: string;
  tags?: string[];
};

const Card = ({ title, subtitle, imageSrc, linkTo, tags }: Props) => {
  const theme = useTheme();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.3 });
  const [_, animate] = useAnimate();
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (wrapperRef.current && rotationRef.current && !isAnimationFinished) {
      animate(wrapperRef.current, { opacity: 0 }, { duration: 0.3 });
      animate(rotationRef.current, { rotateX: 30 }, { duration: 0.3 });

      const duration = 1;
      if (isInView) {
        animate(wrapperRef.current, { opacity: 100 }, { duration });
        animate(rotationRef.current, { rotateX: 0 }, { duration });
        setIsAnimationFinished(true);
      }
    }
  }, [isInView]);

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
      ...animationTransition,
    },
    whileHover: {
      opacity: 100,
      x: 0,
      ...animationTransition,
    },
  };

  return (
    <PerspectiveWrapper>
      <RotationWrapper ref={rotationRef}>
        <AnimationWrapper ref={wrapperRef}>
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
                  <Typography variant={Body.LG}>{subtitle}</Typography>
                </SubtitleWrapper>
                {tags?.length && <ChipList items={tags} />}
              </LeftContent>
              <motion.div variants={arrowVariants}>
                <StyledArrow />
              </motion.div>
            </ContentWrapper>
          </Wrapper>
        </AnimationWrapper>
      </RotationWrapper>
    </PerspectiveWrapper>
  );
};

export default Card;

// https://www.studiogusto.com/studio

export const CARD_HEIGHT = 300;

const AnimationWrapper = styled(motion.div)`
  background-color: transparent;
  transform-origin: bottom center;
`;

const PerspectiveWrapper = styled(motion.div)`
  perspective: 600px;
`;

const RotationWrapper = styled(motion.div)`
  transform-origin: bottom center;
`;

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
  padding: 20px;
  transform-origin: bottom center;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  margin-right: 64px;
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
`;
