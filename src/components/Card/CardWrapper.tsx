import {
  cubicBezier,
  motion,
  useAnimate,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import React, { PropsWithChildren, useRef, useState } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  isVisible?: boolean;
}

const CardWrapper = ({ children, isVisible }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const _ = useInView(ref);
  const { scrollY } = useScroll({ target: ref });

  const distanceToTop =
    window.scrollY +
    (ref.current?.getBoundingClientRect().top ?? 0) -
    window.innerHeight;

  const inputRange = [distanceToTop, distanceToTop + window.innerHeight - 400];

  const rotateX = useTransform(scrollY, inputRange, [30, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  const opacity = useTransform(scrollY, inputRange, ["0%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  return (
    <PerspectiveWrapper>
      <RotationWrapper ref={ref} style={{ rotateX: isVisible ? 0 : rotateX }}>
        <AnimationWrapper style={{ opacity: isVisible ? 100 : opacity }}>
          {children}
        </AnimationWrapper>
      </RotationWrapper>
    </PerspectiveWrapper>
  );
};

export default CardWrapper;

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
