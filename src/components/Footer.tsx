import React from "react";
import styled, { css } from "styled-components";
import Typography, { Heading } from "./Typography";
import CopyOverlayContainer from "./CopyOverlayContainer";
import constants from "../constants/constants.json";
import LinkedInIcon from "../assets/icons/linkedIn.svg";
import GithubIcon from "../assets/icons/github.svg";
import { MAX_SITE_WIDTH } from "../utils/globalStyles";

const FOOTER_ITEMS = [
  { title: "Work" },
  { title: "Murals" },
  { title: "Experience" },
  { title: "Contact" },
];

const Footer = () => (
  <Wrapper>
    <Content>
      <TopContent>
        <PersonalInfoWrapper>
          <PersonalInfoNameWrapper>
            <Typography variant={Heading.H4}>Jokūbas Toločka</Typography>
            <SocialMediaWrapper>
              <LinkText
                href={constants.LINKED_IN_URL}
                target="_blank"
                rel="noopener"
              >
                <StyledLinkedInIcon />
              </LinkText>
              <LinkText
                href={constants.GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                <StyledGithubIcon />
              </LinkText>
            </SocialMediaWrapper>
          </PersonalInfoNameWrapper>
          <Typography variant={Heading.H5}>
            Freelance Designer / Frontend Developer
          </Typography>
        </PersonalInfoWrapper>
        <CopyOverlayContainer>
          <PointerTypography variant={Heading.H1}>
            {constants.EMAIL}
          </PointerTypography>
        </CopyOverlayContainer>
      </TopContent>
      <BottomContent>
        <Typography variant={Heading.H5}>
          Website Designed + Developed by Me
        </Typography>
        <Typography variant={Heading.H5}>
          <BottomLinks>
            {FOOTER_ITEMS.map(({ title }) => (
              <LinkText>{title}</LinkText>
            ))}
          </BottomLinks>
        </Typography>
      </BottomContent>
    </Content>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black.dark};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: ${MAX_SITE_WIDTH}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
`;

const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PersonalInfoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const LinkText = styled.a`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => `${theme.colors.primary} !important`};
  }
`;

const PointerTypography = styled(Typography)`
  cursor: pointer;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const iconStyles = css`
  fill: ${({ theme }) => theme.colors.black.dark};
  width: 30px;
  height: 30px;
  margin: 3px;
  stroke: none !important;

  &:hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${iconStyles}
`;

const StyledGithubIcon = styled(GithubIcon)`
  ${iconStyles}
`;
