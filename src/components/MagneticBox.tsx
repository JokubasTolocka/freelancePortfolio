import React, { PropsWithChildren, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

const MagneticBox = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = ({
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticBox;
