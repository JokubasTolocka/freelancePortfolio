import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import Squiggle from "./Squiggle";
import { ComplimentaryColors } from "../utils/theme";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledSquiggle = styled(Squiggle)`
  width: 70px;
  height: 70px;
`;

type Props = {
  title: string;
  squiggleColor: ComplimentaryColors;
};

const SectionTitle = ({ title, squiggleColor }: Props) => (
  <Wrapper>
    <Typography>{title}</Typography>
    <StyledSquiggle color={squiggleColor} />
  </Wrapper>
);

export default SectionTitle;
