import {
  cubicBezier,
  motion,
  useAnimate,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CardWrapper = ({ children }: PropsWithChildren) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.3 });
  //   const [_, animate] = useAnimate();
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  //   useEffect(() => {
  //     if (wrapperRef.current && rotationRef.current && !isAnimationFinished) {
  //       animate(wrapperRef.current, { opacity: 0 }, { duration: 0.3 });
  //       animate(rotationRef.current, { rotateX: 30 }, { duration: 0.3 });

  //       const duration = 1;
  //       if (isInView) {
  //         animate(wrapperRef.current, { opacity: 100 }, { duration });
  //         animate(rotationRef.current, { rotateX: 0 }, { duration });
  //         setIsAnimationFinished(true);
  //       }
  //     }
  //   }, [isInView]);

  const ref = useRef<HTMLDivElement>(null);
  const _ = useInView(ref);
  const { scrollY } = useScroll({ target: ref });

  const distanceToTop =
    window.scrollY +
    (ref.current?.getBoundingClientRect().top ?? 0) -
    window.innerHeight;

  const inputRange = [distanceToTop, distanceToTop + window.innerHeight - 200];

  const rotateX = useTransform(scrollY, inputRange, [30, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  const opacity = useTransform(scrollY, inputRange, ["0%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  return (
    <PerspectiveWrapper>
      <RotationWrapper ref={ref} style={{ rotateX }}>
        <AnimationWrapper style={{ opacity }}>{children}</AnimationWrapper>
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
