import React, { useEffect, useRef, useState } from "react";
import Typography, { Heading } from "../Typography";
import { useHeaderTitleContext } from "../../contexts/HeaderTitleContext/useHeaderTitleContext";
import styled from "styled-components";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import { motion, useAnimate } from "motion/react";
import LocalTime from "../LocalTime";
import { Link } from "gatsby";

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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
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

  if (window.location.pathname !== "/") {
    console.log(window.location.pathname);
    return (
      <StyledLink to="/">
        <StyledTypography variant={Heading.H5}>Go Back</StyledTypography>
      </StyledLink>
    );
  }

  return (
    <Wrapper>
      <TitleContainer ref={titleContainerRef}>
        {Object.values(SectionTitleEnum).map((value) => {
          if (value === SectionTitleEnum.Landing)
            return <LocalTime key="localTime" />;

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
