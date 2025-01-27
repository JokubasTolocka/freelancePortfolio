import React from "react";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import List, { ListItemType } from "./List/List";
import styled from "styled-components";
import Typography, { Body, Heading } from "./Typography";
import constants from "../constants/constants.json";

interface Props {
  title: SectionTitleEnum;
  listItems: ListItemType[];
  hasLinkedInLink?: boolean;
}

const ListSection = ({ title, listItems, hasLinkedInLink = false }: Props) => (
  <Wrapper>
    <LeftWrapper>
      <Typography variant={Heading.H4}>{title}</Typography>
      {hasLinkedInLink && (
        <Typography variant={Body.MD}>
          More on{" "}
          <Link href={constants.LINKED_IN_URL} target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </Typography>
      )}
    </LeftWrapper>
    <List listItems={listItems} />
  </Wrapper>
);

export default ListSection;

const Wrapper = styled.div`
  padding: 100px 40px 30px 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  overflow: hidden;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
`;
