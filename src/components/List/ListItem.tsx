import React from "react";
import styled from "styled-components";
import { ListItemType } from "./List";
import Typography, { Body } from "../Typography";

interface Props {
  item: ListItemType;
}

const ListItem = ({ item }: Props) => {
  return (
    <Wrapper>
      <StyledTypography variant={Body.LG}>
        <div>
          {item.position}
          {item.place ? ` @ ${item.position}` : ""}
        </div>
        <div>{item.time}</div>
      </StyledTypography>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  padding: 20px 0px;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: space-between;
`;
