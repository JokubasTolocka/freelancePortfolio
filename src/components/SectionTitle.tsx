import React, { ReactNode } from "react";
import styled from "styled-components";
import Typography, { Heading } from "./Typography";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 40px 30px 40px;
  justify-content: space-between;
  align-items: flex-end;
`;

type Props = {
  title: SectionTitleEnum;
  rightElement?: ReactNode;
};

const SectionTitle = ({ title, rightElement }: Props) => (
  <Wrapper>
    <Typography variant={Heading.H4}>{title}</Typography>
    {rightElement}
  </Wrapper>
);

export default SectionTitle;
