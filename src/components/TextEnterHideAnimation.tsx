import { useAnimate, useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const CoverDiv = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Text = styled.div`
  opacity: 0;
`;

type Props = {
  className?: string;
};

const TextEnterHideAnimation = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  const [_, animate] = useAnimate();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(coverRef, { amount: 0.3 });

  const animateEnter = async () => {
    if (coverRef.current) {
      await animate(
        coverRef.current,
        { width: "100%" },
        { duration: 0.2, type: "tween" }
      );
      animate(coverRef.current, { width: 0 }, { duration: 1, type: "tween" });
    }
    if (textRef.current)
      animate(textRef.current, { opacity: 1 }, { duration: 0, delay: 0.1 });
    setIsAnimationComplete(true);
  };

  useEffect(() => {
    if (isInView && !isAnimationComplete) animateEnter();
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <CoverDiv ref={coverRef} />
      <Text ref={textRef}>{children}</Text>
    </Wrapper>
  );
};

export default TextEnterHideAnimation;
