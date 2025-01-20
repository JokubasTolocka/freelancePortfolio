import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portraitImage from "../../assets/images/aboutImage.jpg";
import styled from "styled-components";

const Image = styled(motion.img)`
  display: block;
  object-fit: contain;
  width: 100%;
`;

const PortraitImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
  });

  const bottom = useTransform(scrollY, [0, 1500], [50, -100]);

  return (
    <Image src={portraitImage} alt="portraitPhoto" style={{ bottom: bottom }} />
  );
};

export default PortraitImage;
