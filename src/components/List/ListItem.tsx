import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ListItemType } from "./List";
import Typography, { Body, Heading } from "../Typography";
import { cubicBezier, motion, useAnimate, useAnimation } from "motion/react";
import ListItemEnterWrapper from "./ListItemEnterWrapper";

interface Props {
  item: ListItemType;
}

const ListItem = ({ item }: Props) => {
  const overlayWrapperRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();
  const controls = useAnimation();

  const animationProps = { ease: cubicBezier(0.16, 1, 0.3, 1), duration: 1 };

  const onMouseEnter = () =>
    overlayWrapperRef.current &&
    animate(overlayWrapperRef.current, { top: "0%" }, animationProps);

  const onMouseLeave = () =>
    overlayWrapperRef.current &&
    animate(overlayWrapperRef.current, { top: "100%" }, animationProps);

  const handleScrollText = () =>
    controls.start({
      x: "-50%",
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

  useEffect(() => {
    handleScrollText();
  }, []);

  const scrollText = ` / ${item.position} ${
    item.place ? ` @ ${item.place}` : ""
  } / ${item.time} / ${item.tags.join(" / ")}`;

  return (
    <ListItemEnterWrapper>
      <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <OverlayWrapper ref={overlayWrapperRef}>
          <ScrollWrapper animate={controls}>
            <StyledScrollTypography variant={Heading.H5}>
              {scrollText} {scrollText}
            </StyledScrollTypography>
          </ScrollWrapper>
        </OverlayWrapper>
        <StyledTypography variant={Body.LG}>
          <div>
            {item.position}
            {item.place ? ` @ ${item.place}` : ""}
          </div>
          <div>{item.time}</div>
        </StyledTypography>
      </Wrapper>
    </ListItemEnterWrapper>
  );
};

export default ListItem;

const Wrapper = styled(motion.div)`
  padding: 20px 0px;
  overflow: hidden;
  position: relative;
`;

const OverlayWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 100%;
  color: ${({ theme }) => theme.colors.black.dark};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
`;

const StyledScrollTypography = styled(Typography)`
  display: inline-block;
  white-space: nowrap;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  white-space: nowrap;
`;

const ScrollWrapper = styled(motion.div)`
  display: inline-block;
  white-space: nowrap;
`;
