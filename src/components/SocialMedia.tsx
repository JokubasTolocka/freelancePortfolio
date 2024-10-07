import React from "react";
import LinkedInIcon from "../assets/linkedIn.svg";
import GithubIcon from "../assets/github.svg";
import styled from "styled-components";

const iconStyles = styled.svg`
  fill: ${({ theme }) => theme.colors.black};
  width: 30px;
  height: 30px;
  padding: 3px;
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
