import React, { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portraitImage from "../../assets/images/aboutImage.jpg";
import styled from "styled-components";

const ImageWrapper = styled.div`
  border-right: ${({ theme }) => `4px solid ${theme.colors.black}`};
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled(motion.img)`
  display: block;
  object-fit: contain;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const PortraitImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
  });

  const bottom = useTransform(scrollY, [0, 1500], [50, -100]);

  return (
    <ImageWrapper ref={containerRef}>
      <Image
        src={portraitImage}
        alt="portraitPhoto"
        style={{ bottom: bottom }}
      />
    </ImageWrapper>
  );
};

export default PortraitImage;
