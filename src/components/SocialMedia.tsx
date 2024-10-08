import React from "react";
import LinkedInIcon from "../assets/linkedIn.svg";
import GithubIcon from "../assets/github.svg";
import styled, { css } from "styled-components";

const iconStyles = css`
  fill: ${({ theme }) => theme.colors.black};
  width: 30px;
  height: 30px;
  margin: 6px;
  stroke: none !important;
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${iconStyles}
`;
const StyledGithubIcon = styled(GithubIcon)`
  ${iconStyles}
`;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialMedia = () => (
  <Wrapper>
    <StyledLinkedInIcon />
    <StyledGithubIcon />
  </Wrapper>
);

export default SocialMedia;
