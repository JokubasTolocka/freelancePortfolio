import React from "react";
import styled, { useTheme } from "styled-components";
import { motion, Variants } from "motion/react";
// @ts-ignore
import { useLenis } from "lenis/react";
import Typography, { Body } from "../Typography";
import SocialMedia from "../SocialMedia";
import FlipText from "../FlipTextAnimation";
import HeaderSectionTitle from "./HeaderSectionTitle";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

export const HEADER_CONTENT_HEIGHT = 65;

const NAV_ITEMS = [
  { title: "Work", id: SectionTitleEnum.Work },
  { title: "Experience", id: SectionTitleEnum.Experience },
  { title: "About", id: SectionTitleEnum.About },
];

const Header = () => {
  const theme = useTheme();
  const lenis = useLenis();

  const linkAnimationVariants: Variants = {
    initial: {
      scaleX: 0,
      transition: {
        duration: 0.2,
      },
    },
    whileHover: {
      scaleX: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactButtonVariants: Variants = {
    initial: {
      backgroundColor: theme.colors.white,
      color: theme.colors.black.dark,
      transition: {
        duration: 0.2,
      },
    },
    whileHover: {
      backgroundColor: theme.colors.black.dark,
      color: theme.colors.white,
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
            onClick={() => handleNavigate(id)}
          >
            <FlipText>
              <Typography variant={Body.MD}>{title}</Typography>
            </FlipText>
            {/* <Underline variants={linkAnimationVariants} /> */}
          </LinkHover>
        ))}
        <ContactButton
          initial="initial"
          whileHover="whileHover"
          variants={contactButtonVariants}
        >
          <Typography variant={Body.MD}>Contact</Typography>
        </ContactButton>
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
  padding: 0 12px;
  padding-top: 2px;
  border-radius: 100px;
  box-sizing: content-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderTitleWrapper = styled.div`
  position: relative;
`;

const ContactButton = styled(motion.div)`
  padding: 2px 12px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: 20px;
  cursor: pointer;
  margin-right: 12px;
`;

const Underline = styled(motion.div)`
  height: 1px;
  width: 100%;
  transform-origin: left;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;
