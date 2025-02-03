import React, { useState } from "react";
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
          <source src="../images/portraitVideo.mp4" type="video/mp4" />
        </video>
      )}
      <Image src="../images/portraitImage.jpg" alt="portraitPhoto" />
    </Wrapper>
  );
};

export default PortraitImage;
