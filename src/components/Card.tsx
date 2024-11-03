import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { motion, useAnimate, useInView } from "framer-motion";
import TextEnterAnimation from "./TextEnterAnimation";

const Wrapper = styled(motion.a)`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 8px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  height: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  margin-bottom: 16px;
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
      <TextEnterAnimation>
        <Typography variant="Heading3">{title}</Typography>
      </TextEnterAnimation>
      <TextEnterAnimation>
        <Typography variant="BodySm" isBody>
          {subtitle}
        </Typography>
      </TextEnterAnimation>
    </Wrapper>
  );
};

export default Card;
