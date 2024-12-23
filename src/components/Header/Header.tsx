import React from "react";
import styled from "styled-components";
import Typography from "../Typography";
import SocialMedia from "../SocialMedia";
import FlipText from "../FlipTextAnimation";
import HeaderSectionTitle from "./HeaderSectionTitle";

export const HEADER_CONTENT_HEIGHT = 88;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_CONTENT_HEIGHT}px;
  padding: 0 64px;
  width: 100%;
  position: sticky;
  z-index: 99;
  top: 0;
`;

const LinkHover = styled.div`
  padding: 2px 12px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: content-box;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #f9e1a7;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NAV_ITEMS = [
  { title: "About" },
  { title: "Services" },
  { title: "Work" },
  { title: "Contact" },
];

const Header = () => (
  <Wrapper>
    <HeaderSectionTitle />
    <RightContent>
      {NAV_ITEMS.map(({ title }) => (
        <LinkHover key={title}>
          <FlipText>
            <Typography variant="Heading5">{title}</Typography>
          </FlipText>
        </LinkHover>
      ))}
      <SocialMedia />
    </RightContent>
  </Wrapper>
);

export default Header;
