import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = {
  href: string;
  isStatic?: boolean;
};

const Link = ({ children, href, isStatic }: PropsWithChildren<Props>) => {
  const animationProps = !isStatic && {
    whileHover: {
      scale: 1.1,
      transition: { type: "tween", duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.a href={href} target="_blank" {...animationProps}>
      {children}
    </motion.a>
  );
};

export default Link;
