import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Variant =
  | "Header"
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Heading6"
  | "Subtitle"
  | "BodyLg"
  | "BodyMd"
  | "BodySm";

export enum FontSize {
  Header = "130px",
  Heading1 = "48px",
  Heading2 = "36px",
  Heading3 = "28px",
  Heading4 = "24px",
  Heading5 = "20px",
  Heading6 = "18px",
  Subtitle = "28px",
  BodyLg = "24px",
  BodyMd = "20px",
  BodySm = "18px",
}

type Props = {
  variant?: Variant;
  isBody?: boolean;
};

const Text = styled.span<{ $variant: Variant; $isBody: boolean }>`
  font-family: ${(props) => (props.$isBody ? "Lora" : "Dela Gothic One")};
  color: ${(props) => props.theme.black};
  font-size: ${(props) => FontSize[props.$variant]};
  line-height: ${(props) => (props.$isBody ? "140%" : "auto")};
`;

const Typography = ({
  variant = "Heading1",
  children,
  isBody = false,
}: PropsWithChildren<Props>) => {
  return (
    <Text $variant={variant} $isBody={isBody}>
      {children}
    </Text>
  );
};

export default Typography;
