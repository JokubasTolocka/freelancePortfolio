import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  href: string;
  isStatic?: boolean;
};

const StyledA = styled(motion.a)`
  line-height: 0;
`;

const Link = ({ children, href, isStatic }: PropsWithChildren<Props>) => {
  const animationProps = !isStatic && {
    whileHover: {
      scale: 1.1,
      transition: { type: "tween", duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <StyledA href={href} target="_blank" {...animationProps}>
      {children}
    </StyledA>
  );
};

export default Link;
