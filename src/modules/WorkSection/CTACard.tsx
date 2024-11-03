import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import EyesIcon from "../../assets/icons/eyes.svg";
import Button from "../../components/Button";
import TextEnterAnimation from "../../components/TextEnterAnimation";
import { motion, useAnimate, useInView } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='1' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;

const GradientWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgb(99, 205, 247);
  background: radial-gradient(
    circle,
    rgba(99, 205, 247, 0.5) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transform: scale(1.3);
  transition: transform 0.2s ease;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin-top: 40px;
`;

const BottomSection = styled(TextEnterAnimation)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const CTACard = () => {
  const [_, animate] = useAnimate();
  const contentRef = useRef<HTMLImageElement>(null);
  const scopeRef = useRef<HTMLImageElement>(null);
  const isImageInView = useInView(scopeRef, { amount: 0.5 });

  const animateImage = () =>
    contentRef.current && animate(contentRef.current, { scale: 1 });

  const resetImageAnimation = () =>
    contentRef.current && animate(contentRef.current, { scale: 1.3 });

  useEffect(() => {
    if (isImageInView) animateImage();
    else resetImageAnimation();
  }, [isImageInView]);

  return (
    <Wrapper>
      <ContentBox ref={scopeRef}>
        <GradientWrapper ref={contentRef}>
          <StyledTypography variant="Heading2">
            This could be your project.
          </StyledTypography>
          <EyesIcon />
        </GradientWrapper>
      </ContentBox>
      <BottomSection>
        <Typography variant="Heading3">Like what you’re seeing?</Typography>
        <Button onClick={() => {}}>Let’s talk</Button>
      </BottomSection>
    </Wrapper>
  );
};

export default CTACard;
