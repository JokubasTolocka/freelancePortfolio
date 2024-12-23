import React, { ReactNode } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const Wrapper = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  padding: 64px;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

type Props = {
  title: SectionTitleEnum;
  icon?: any;
  rightElement?: ReactNode;
};

const SectionTitle = ({ title, icon, rightElement }: Props) => (
  <Wrapper>
    <LeftWrapper>
      {icon}
      <Typography>{title}</Typography>
    </LeftWrapper>
    {rightElement}
  </Wrapper>
);

export default SectionTitle;
