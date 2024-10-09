import { motion } from "framer-motion";
import React from "react";

const HeyoUnderline = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  const animationProps = {
    initial: "hidden",
    animate: "visible",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
    stroke: "black",
    strokeWidth: 3,
    strokeDasharray: "0 1",
    variants: icon,
  };

  return (
    <motion.svg
      width="584"
      height="25"
      viewBox="0 0 584 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        {...{ ...animationProps, transition: { delay: 1 } }}
        d="M2 22.5896C60.8994 18.3825 119.394 13.2248 178.508 11.3269C312.856 7.01374 447.308 5.77443 581.678 2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default HeyoUnderline;
