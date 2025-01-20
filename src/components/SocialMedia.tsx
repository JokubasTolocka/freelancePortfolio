import React from "react";
import LinkedInIcon from "../assets/icons/linkedIn.svg";
import GithubIcon from "../assets/icons/github.svg";
import styled, { css } from "styled-components";
import constants from "../constants/constants.json";
import Link from "./Link";
import MagneticBox from "./MagneticBox";

const iconStyles = (isContrast?: boolean) => css`
  fill: ${({ theme }) =>
    isContrast ? theme.colors.black.dark : theme.colors.white};
  width: 30px;
  height: 30px;
  margin: 3px;
  stroke: none !important;
`;

const StyledLinkedInIcon = styled(LinkedInIcon)<{ $isContrast?: boolean }>`
  ${({ $isContrast }) => iconStyles($isContrast)}
`;
const StyledGithubIcon = styled(GithubIcon)<{ $isContrast?: boolean }>`
  ${({ $isContrast }) => iconStyles($isContrast)}
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

interface Props {
  isContrast?: boolean;
}

const SocialMedia = ({ isContrast }: Props) => (
  <Wrapper>
    <Link href={constants.LINKED_IN_URL}>
      <MagneticBox>
        <StyledLinkedInIcon $isContrast={isContrast} />
      </MagneticBox>
    </Link>
    <Link href={constants.GITHUB_URL}>
      <MagneticBox>
        <StyledGithubIcon $isContrast={isContrast} />
      </MagneticBox>
    </Link>
  </Wrapper>
);

export default SocialMedia;
