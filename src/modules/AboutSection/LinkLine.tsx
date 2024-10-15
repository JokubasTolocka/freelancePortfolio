import React, { useRef } from "react";
import Typography from "../../components/Typography";
import constants from "../../constants/constants.json";
import styled from "styled-components";
import WaveIcon from "../../assets/icons/wave.svg";
import { motion, useAnimate } from "framer-motion";

const WHITESPACE = " ";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div`
  transform-origin: 70% 70%;
`;

const StyledWaveIcon = styled(WaveIcon)`
  width: 28px;
  height: 28px;
`;

const StyledATag = styled(motion.a)`
  color: ${({ theme }) => theme.colors.black};
`;

const LinkLine = () => {
  const [scope, animate] = useAnimate();
  const waveRef = useRef(null);

  const handleAnimate = async () => {
    if (!waveRef.current) return;

    animate(
      waveRef.current,
      { scale: 1.3, x: 5 },
      { duration: 0.2, ease: "backOut" }
    );
    await animate(
      waveRef.current,
      { rotate: [0, 25, 0, -25, 0, 25, 0, -25, 0] },
      { duration: 0.6, type: "tween" }
    );
    await animate(
      waveRef.current,
      { scale: 1, x: 0 },
      { duration: 0.3, ease: "backOut" }
    );
  };

  return (
    <Wrapper ref={scope} onMouseEnter={handleAnimate}>
      <Typography variant="BodyMd" isBody>
        Say hi via{WHITESPACE}
        <StyledATag target="_blank" href={`mailto:${constants.EMAIL}`}>
          email
        </StyledATag>
        {WHITESPACE}
        or{WHITESPACE}
        <StyledATag target="_blank" href={constants.LINKED_IN_URL}>
          LinkedIn
        </StyledATag>
        .
      </Typography>
      <IconWrapper ref={waveRef}>
        <StyledWaveIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default LinkLine;
