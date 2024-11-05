import React from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";

const Wrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    text-decoration: underline;
  }
`;

const BrowseAllWorkButton = () => (
  <Wrapper href="/">
    <Typography variant="Heading3">Browse All</Typography>
  </Wrapper>
);

export default BrowseAllWorkButton;
