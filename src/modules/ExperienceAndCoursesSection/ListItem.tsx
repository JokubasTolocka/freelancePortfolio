import React, { useRef } from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";
import { motion, useAnimate } from "framer-motion";
import { theme } from "../../utils/theme";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  /* padding: 32px 32px 0 32px; */
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DurationText = styled(Typography)`
  color: ${({ theme }) => theme.colors.gray};
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  height: 0;
  opacity: 0;
  overflow: hidden;
  top: 86px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  /* border-right: ${({ theme }) => `4px solid ${theme.colors.black}`}; */
  z-index: 1;
`;

const DescriptionContent = styled.div`
  padding: 16px 32px 32px 32px;
`;

type Props = {
  employer: string;
  title: string;
  duration: string;
};

const ListItem = ({ employer, title, duration }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();

  const onHoverStart = () => {
    console.log("start");

    if (!descriptionRef.current || !wrapperRef.current) return;

    animate(
      descriptionRef.current,
      { height: 180 },
      { duration: 0.3, ease: "easeInOut" }
    );
    animate(
      descriptionRef.current,
      { opacity: 100 },
      { duration: 0.3, ease: "easeInOut" }
    );
    animate(
      wrapperRef.current,
      { backgroundColor: "#ecd07c" },
      { duration: 0.3, ease: "easeInOut" }
    );
  };

  const onHoverEnd = () => {
    if (!descriptionRef.current || !wrapperRef.current) return;

    animate(
      descriptionRef.current,
      { height: 0 },
      { duration: 0.3, ease: "easeInOut" }
    );
    animate(
      descriptionRef.current,
      { opacity: 0 },
      { duration: 0.3, ease: "easeInOut" }
    );
    animate(
      wrapperRef.current,
      { backgroundColor: theme.colors.white },
      { duration: 0.3, ease: "easeInOut" }
    );
  };

  return (
    <Wrapper
      ref={wrapperRef}
      key={employer}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Typography variant="Heading5">{title}</Typography>
      <RightContent>
        <Typography variant="Heading5">{employer}</Typography>
        <DurationText variant="BodyXs" isBody>
          {duration}
        </DurationText>
      </RightContent>
      <DescriptionWrapper ref={descriptionRef}>
        <DescriptionContent>
          <Typography variant="BodySm" isBody>
            Hello this is a test to see if this thing even works lol and I am
            currently coding so that it does, once again, please work
          </Typography>
        </DescriptionContent>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default ListItem;
