import React from "react";
import LinkedInIcon from "../assets/linkedIn.svg";
import GithubIcon from "../assets/github.svg";
import styled, { css } from "styled-components";
import constants from "../constants/constants.json";
import Link from "./Link";

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
    <Link href={constants.LINKED_IN_URL}>
      <StyledLinkedInIcon />
    </Link>
    <Link href={constants.GITHUB_URL}>
      <StyledGithubIcon />
    </Link>
  </Wrapper>
);

export default SocialMedia;
