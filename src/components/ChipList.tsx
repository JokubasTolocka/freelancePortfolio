import React from "react";
import Typography, { Heading } from "./Typography";
import styled from "styled-components";

interface Props {
  items: string[];
}

const CHIP_AMOUNT = 4;

const ChipList = ({ items }: Props) => (
  <TagWrapper>
    {items.slice(0, CHIP_AMOUNT).map((title, index) => (
      <Tag key={`${title}-${index}`}>
        <Typography variant={Heading.H6}>{title}</Typography>
      </Tag>
    ))}
    {items.length > CHIP_AMOUNT && (
      <Tag>
        <Typography variant={Heading.H6}>
          +{items.length - CHIP_AMOUNT}
        </Typography>
      </Tag>
    )}
  </TagWrapper>
);

export default ChipList;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding: 5px 15px;
  border-radius: 50px;
`;
