import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { motion, useAnimate, useInView } from "framer-motion";
import TextEnterAnimation from "./TextEnterAnimation";

const Wrapper = styled(motion.a)`
  width: 100%;
  height: 295px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  justify-content: center;
  gap: 16px;
`;

const SubtitleWrapper = styled.div`
  max-width: 460px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  border-right: ${({ theme }) => `4px solid ${theme.colors.black}`};
  overflow: hidden;
`;

const Image = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  transform: scale(1.3);
  transition: transform 0.2s ease;
  overflow: hidden;
`;

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkTo: string;
};

const Card = ({ title, subtitle, imageSrc, linkTo }: Props) => {
  const [_, animate] = useAnimate();
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageInView = useInView(imageRef, { amount: 0.5 });

  const animateImage = () =>
    imageRef.current && animate(imageRef.current, { scale: 1.05 });

  useEffect(() => {
    if (isImageInView) animateImage();
  }, [isImageInView]);

  const animationVariants = {
    initialInView: { scale: 1.05 },
    initial: { scale: 1.3 },
    whileHover: { scale: 1 },
  };

  const initialAnimation = isImageInView ? "initialInView" : "initial";

  return (
    <Wrapper
      href={linkTo}
      initial={initialAnimation}
      whileHover="whileHover"
      animate={initialAnimation}
    >
      <ImageWrapper>
        <Image src={imageSrc} ref={imageRef} variants={animationVariants} />
      </ImageWrapper>
      <ContentWrapper>
        <TextEnterAnimation>
          <Typography variant="Heading2">{title}</Typography>
        </TextEnterAnimation>
        <SubtitleWrapper>
          <TextEnterAnimation>
            <Typography variant="BodySm" isBody>
              {subtitle}
            </Typography>
          </TextEnterAnimation>
        </SubtitleWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;
