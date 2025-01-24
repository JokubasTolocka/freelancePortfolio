import React from "react";
import styled, { useTheme } from "styled-components";
import { motion, Variants } from "framer-motion";
// @ts-ignore
import { useLenis } from "lenis/react";
import Typography, { Heading } from "../Typography";
import SocialMedia from "../SocialMedia";
import FlipText from "../FlipTextAnimation";
import HeaderSectionTitle from "./HeaderSectionTitle";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

export const HEADER_CONTENT_HEIGHT = 65;

const NAV_ITEMS = [
  { title: "Work", id: SectionTitleEnum.Work },
  { title: "Experience", id: SectionTitleEnum.Experience },
  { title: "About", id: SectionTitleEnum.About },
  { title: "Contact" },
];

const Header = () => {
  const theme = useTheme();
  const lenis = useLenis();

  const linkAnimationVariants: Variants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
      transition: {
        duration: 0.2,
      },
    },
    whileHover: {
      backgroundColor: theme.colors.primary,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleNavigate = (id?: SectionTitleEnum) => {
    if (id) lenis?.scrollTo(`#${id.replace(/ /g, "")}`);
  };

  return (
    <Wrapper>
      <HeaderTitleWrapper>
        <HeaderSectionTitle />
      </HeaderTitleWrapper>
      <RightContent>
        {NAV_ITEMS.map(({ title, id }) => (
          <LinkHover
            key={title}
            as={motion.div}
            initial="initial"
            whileHover="whileHover"
            variants={linkAnimationVariants}
            onClick={() => handleNavigate(id)}
          >
            <FlipText>
              <Typography variant={Heading.H5}>{title}</Typography>
            </FlipText>
          </LinkHover>
        ))}
        <SocialMedia />
      </RightContent>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_CONTENT_HEIGHT}px;
  padding: 0 40px;
  width: 100%;
  position: sticky;
  z-index: 99;
  top: 0;
`;

const LinkHover = styled.div`
  padding: 2px 12px;
  border-radius: 100px;
  box-sizing: content-box;
  cursor: pointer;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderTitleWrapper = styled.div`
  position: relative;
`;
