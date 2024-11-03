import { useAnimate, useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.3s, transform 0.3s;
`;

type Props = {
  className?: string;
};

const TextEnterAnimation = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  const [_, animate] = useAnimate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.3 });

  const animateTextEnter = () =>
    wrapperRef.current && animate(wrapperRef.current, { x: 0, opacity: 1 });

  useEffect(() => {
    if (isInView) animateTextEnter();
  }, [isInView]);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      {children}
    </Wrapper>
  );
};

export default TextEnterAnimation;
