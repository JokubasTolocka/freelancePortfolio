import React, { useEffect, useRef, useState } from "react";
import Typography, { Heading } from "../Typography";
import { useHeaderTitleContext } from "../../contexts/HeaderTitleContext/useHeaderTitleContext";
import styled from "styled-components";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import { motion, useAnimate } from "framer-motion";
import ExplodeSwitch from "./ExplodeSwitch";

const TITLE_HEIGHT = 26;

const Wrapper = styled.div`
  overflow: hidden;
  overflow-x: visible;
  height: ${TITLE_HEIGHT}px;
`;

const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  min-height: ${TITLE_HEIGHT}px;
`;

const HeaderSectionTitle = () => {
  const { titleValue } = useHeaderTitleContext();
  const titleContainerRef = useRef(null);
  const [_, animate] = useAnimate();

  useEffect(() => {
    if (titleContainerRef.current) {
      const distanceFromTop =
        Object.values(SectionTitleEnum).indexOf(titleValue) * TITLE_HEIGHT;
      animate(titleContainerRef.current, { y: -distanceFromTop });
    }
  }, [titleValue]);

  return (
    <Wrapper>
      <TitleContainer ref={titleContainerRef}>
        {Object.values(SectionTitleEnum).map((value) => {
          if (value === SectionTitleEnum.Landing) return <ExplodeSwitch />;

          return (
            <StyledTypography variant={Heading.H5} key={value}>
              {value}
            </StyledTypography>
          );
        })}
      </TitleContainer>
    </Wrapper>
  );
};

export default HeaderSectionTitle;
