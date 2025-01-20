import React from "react";
import styled from "styled-components";
import Typography, { Heading } from "./Typography";
import SocialMedia from "./SocialMedia";
import CopyOverlayContainer from "./CopyOverlayContainer";
import constants from "../constants/constants.json";

const FOOTER_ITEMS = [
  { title: "Work" },
  { title: "Murals" },
  { title: "Experience" },
  { title: "Contact" },
];

const Footer = () => {
  return (
    <Wrapper>
      <TopContent>
        <PersonalInfoWrapper>
          <PersonalInfoNameWrapper>
            <Typography variant={Heading.H4}>Jokūbas Toločka</Typography>
            <SocialMedia isContrast={true} />
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
              <Link>{title}</Link>
            ))}
          </BottomLinks>
        </Typography>
      </BottomContent>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black.dark};
  display: flex;
  flex-direction: column;
  gap: 40px;
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

const Link = styled.a`
  cursor: pointer;
`;

const PointerTypography = styled(Typography)`
  cursor: pointer;
`;
