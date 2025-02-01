import React, { useState } from "react";
import { motion } from "motion/react";
import portraitImage from "../../assets/images/portraitImage.jpg";
import portraitVideo from "../../assets/images/portraitVideo.mp4";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  align-content: start;
  border-radius: 10px;
  overflow: hidden;
  height: fit-content;
`;

const Image = styled.img`
  width: 100%;
`;

const PortraitImage = () => {
  const [isHovering, setIsHovering] = useState(false);

  const setHovering = () => setIsHovering(true);
  const clearHovering = () => setIsHovering(false);

  return (
    <Wrapper onMouseEnter={setHovering} onMouseLeave={clearHovering}>
      {isHovering && (
        <video
          width="100%"
          controls={false}
          muted
          autoPlay
          onEnded={clearHovering}
        >
          <source src={portraitVideo} type="video/mp4" />
        </video>
      )}
      <Image src={portraitImage} alt="portraitPhoto" />
    </Wrapper>
  );
};

export default PortraitImage;
