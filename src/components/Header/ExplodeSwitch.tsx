import React, { useEffect } from "react";
import Typography, { Heading } from "../Typography";
import styled, { useTheme } from "styled-components";
import { DynamicAnimationOptions, motion, useAnimate } from "motion/react";
import { useGlobalContext } from "../../contexts/GlobalContext/useGlobalContext";

const ExplodeSwitch = () => {
  const { shouldExplode, setShouldExplode } = useGlobalContext();
  const [switchCircleRef, animateSwitch] = useAnimate();
  const [switchWrapperRef, animateSwitchWrapper] = useAnimate();
  const theme = useTheme();

  const animationProps: DynamicAnimationOptions = {
    duration: 0.2,
    ease: [0.65, 0, 0.35, 1],
  };

  useEffect(() => {
    if (shouldExplode)
      animateSwitchWrapper(switchWrapperRef.current, {
        backgroundColor: theme.colors.white,
      });
  }, [shouldExplode]);

  const toggleSwitch = () => {
    if (!shouldExplode) {
      animateSwitch(switchCircleRef.current, { x: 19 }, animationProps);
    } else {
      animateSwitch(switchCircleRef.current, { x: 0 }, animationProps);
    }
    if (!shouldExplode) setShouldExplode(true);
  };

  return (
    <Wrapper onClick={toggleSwitch}>
      <Typography variant={Heading.H5}>Explode</Typography>
      <SwitchWrapper ref={switchWrapperRef}>
        <SwitchCircle ref={switchCircleRef} />
      </SwitchWrapper>
    </Wrapper>
  );
};

export default ExplodeSwitch;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const SwitchWrapper = styled.div`
  border-radius: 50px;
  height: 21px;
  width: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  display: flex;
  align-items: center;
`;

const SwitchCircle = styled(motion.div)`
  height: 17px;
  width: 17px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 1px;
`;
