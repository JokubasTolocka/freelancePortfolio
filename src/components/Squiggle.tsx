import React from "react";
import SquiggleIcon from "../assets/squiggle.svg";
import styled from "styled-components";

const getRandomRotation = () => Math.random() * 360;

const StyledSquiggle = styled(SquiggleIcon)`
  stroke: ${({ theme }) => theme.colors.complimentary.green};
  width: 38px;
  height: 38px;
  transform: rotate(${getRandomRotation()}deg);
  fill: none !important;
`;

const Squiggle = () => <StyledSquiggle />;

export default Squiggle;
