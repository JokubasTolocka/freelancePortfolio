import React from "react";
import styled from "styled-components";

type Variant =
  | "Header"
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Heading6";

export enum FontSize {
  Header = "130px",
  Heading1 = "48px",
  Heading2 = "36px",
  Heading3 = "28px",
  Heading4 = "24px",
  Heading5 = "20px",
  Heading6 = "18px",
}

type Props = {
  variant?: Variant;
  children: string;
};

const Text = styled.span<{ variant: Variant }>`
  font-family: "Dela Gothic One";
  color: ${(props) => props.theme.black};
  font-size: ${(props) => FontSize[props.variant]};
`;

const Typography = ({ variant = "Heading1", children }: Props) => {
  return <Text variant={variant}>{children}</Text>;
};

export default Typography;
