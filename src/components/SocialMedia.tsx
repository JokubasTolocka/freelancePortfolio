import React, { PropsWithChildren, useRef, useState, MouseEvent } from "react";
import LinkedInIcon from "../assets/linkedIn.svg";
import GithubIcon from "../assets/github.svg";
import styled, { css } from "styled-components";
import constants from "../constants/constants.json";
import Link from "./Link";
import { motion } from "framer-motion";
import MagneticBox from "./MagneticBox";

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
      <MagneticBox>
        <StyledLinkedInIcon />
      </MagneticBox>
    </Link>
    <Link href={constants.GITHUB_URL}>
      <MagneticBox>
        <StyledGithubIcon />
      </MagneticBox>
    </Link>
  </Wrapper>
);

export default SocialMedia;
