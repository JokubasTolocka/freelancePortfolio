import React from "react";
import SquiggleIcon from "../assets/icons/squiggle.svg";
import styled from "styled-components";
import { ComplimentaryColors } from "../utils/theme";

const getRandomRotation = () => Math.random() * 360;

const StyledSquiggle = styled(SquiggleIcon)<{ $color: ComplimentaryColors }>`
  stroke: ${({ theme, $color }) => theme.colors.complimentary[$color]};
  width: 38px;
  height: 38px;
  transform: rotate(${getRandomRotation()}deg);
  fill: none !important;
`;

type Props = {
  color?: ComplimentaryColors;
  className?: string;
};

const Squiggle = ({ color = "green", className }: Props) => (
  <StyledSquiggle $color={color} className={className} />
);

export default Squiggle;
