import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import SocialMedia from "./SocialMedia";
import FlipText from "./FlipTextAnimation";

export const HEADER_CONTENT_HEIGHT = 88;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${HEADER_CONTENT_HEIGHT}px;
  padding: 0 64px;
  gap: 32px;
  width: 100%;
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

const Header = () => {
  const navItems = [
    { title: "About" },
    { title: "Services" },
    { title: "Work" },
    { title: "Contact" },
  ];

  return (
    <Wrapper>
      {navItems.map(({ title }) => (
        <LinkHover key={title}>
          <FlipText>
            <Typography variant="Heading5">{title}</Typography>
          </FlipText>
        </LinkHover>
      ))}
      <SocialMedia />
    </Wrapper>
  );
};

export default Header;
