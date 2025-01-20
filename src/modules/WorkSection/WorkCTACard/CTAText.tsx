import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typography from "../../../components/Typography";
import { motion, useAnimate, useInView } from "framer-motion";
import Button from "../../../components/Button";
import { BORDER_STYLE } from "../../../utils/globalStyles";

const BUTTON_DELAY = 0.8;

const CTAText = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(wrapperRef);
  const [, animate] = useAnimate();

  const animateTitleEnter = () => {
    if (!titleRef.current || !buttonRef.current) return;

    animate(
      titleRef.current,
      { scale: 1, opacity: 100 },
      { duration: 0.5, ease: "easeIn" }
    );
    animate(
      buttonRef.current,
      { y: 0, opacity: 100 },
      { duration: 0.3, ease: "easeIn", delay: BUTTON_DELAY }
    );
  };

  useEffect(() => {
    if (isCardInView) animateTitleEnter();
  }, [isCardInView]);

  return (
    <Wrapper ref={wrapperRef}>
      <TitleWrapper>
        <TitleText ref={titleRef}>
          <Typography variant="Heading2">Like what you’re seeing?</Typography>
        </TitleText>
      </TitleWrapper>
      <ButtonWrapper ref={buttonRef}>
        <StyledButton onClick={() => {}}>Contact</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CTAText;

const Wrapper = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const TitleWrapper = styled.div`
  padding: 16px 48px;
  border: ${BORDER_STYLE};
  background-color: ${({ theme }) => `rgba(255, 255, 255, 0.8)`};
  /* background-color: ${({ theme }) => theme.colors.background}; */
  border-radius: 100px;
`;

const TitleText = styled(motion.div)`
  opacity: 0;
  transform: scale(1.3);
  transition: transform 0.5s ease;
`;

const ButtonWrapper = styled(motion.div)`
  opacity: 0;
  transform: translateY(60px);
  transition: transform 0.5s ease ${BUTTON_DELAY}s;
  pointer-events: auto;
`;

const StyledButton = styled(Button)`
  border-radius: 50px;
  padding: 16px 48px;
`;
