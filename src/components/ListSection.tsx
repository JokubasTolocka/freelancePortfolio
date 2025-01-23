import React from "react";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import List, { ListItemType } from "./List/List";
import styled from "styled-components";
import Typography, { Heading } from "./Typography";

interface Props {
  title: SectionTitleEnum;
  listItems: ListItemType[];
}

const ListSection = ({ title, listItems }: Props) => {
  return (
    <Wrapper>
      <Typography variant={Heading.H4}>{title}</Typography>
      <List listItems={listItems} />
    </Wrapper>
  );
};

export default ListSection;

const Wrapper = styled.div`
  padding: 100px 40px 30px 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  overflow: hidden;
`;
