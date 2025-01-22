import React from "react";
import styled, { useTheme } from "styled-components";
import Typography, { Heading } from "../Typography";
import SocialMedia from "../SocialMedia";
import FlipText from "../FlipTextAnimation";
import HeaderSectionTitle from "./HeaderSectionTitle";
import { motion, Variants } from "framer-motion";

export const HEADER_CONTENT_HEIGHT = 65;

const NAV_ITEMS = [
  { title: "Work" },
  { title: "Experience" },
  { title: "About" },
  { title: "Contact" },
];

const Header = () => {
  const theme = useTheme();

  const linkAnimationVariants: Variants = {
    initial: {
      backgroundColor: theme.colors.black.dark,
      color: theme.colors.while,
    },
    whileHover: {
      backgroundColor: theme.colors.black.mid,
      color: theme.colors.white,
    },
  };

  return (
    <Wrapper>
      <HeaderTitleWrapper>
        <HeaderSectionTitle />
      </HeaderTitleWrapper>
      <RightContent>
        {NAV_ITEMS.map(({ title }) => (
          <LinkHover
            key={title}
            as={motion.div}
            initial="initial"
            whileHover="whileHover"
            variants={linkAnimationVariants}
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
