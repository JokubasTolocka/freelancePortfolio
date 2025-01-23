import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

export type ListItemType = {
  position: string;
  place?: string;
  time: string;
  tags: string[];
};

interface Props {
  listItems: ListItemType[];
}

const List = ({ listItems }: Props) => {
  return (
    <Wrapper>
      {listItems.map((item, key) => (
        <ListItem item={item} key={`${item.position}-${key}`} />
      ))}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
