import React, { PropsWithChildren, RefObject } from "react";
import styled from "styled-components";

export enum Heading {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
  H7 = "H7",
}

export enum Body {
  Heading = "Heading",
  LG = "LG",
  MD = "MD",
}

enum FontSize {
  H1 = "83px",
  H2 = "56px",
  H3 = "36px",
  H4 = "26px",
  H5 = "22px",
  H6 = "18px",
  H7 = "16px",
  LG = "22px",
  MD = "18px",
  Heading = "83px",
}

type Variant = Heading | Body;

type Props = {
  variant?: Variant;
  isBody?: boolean;
  className?: string;
  passedRef?: RefObject<HTMLDivElement>;
};

// @ts-ignore
const isBody = (variant: Variant) => Object.values(Body).includes(variant);

const Text = styled.span<{ $variant: Variant; $isBody: boolean }>`
  font-family: "PP Neue Montreal";
  font-size: ${({ $variant }) => FontSize[$variant]};
  font-weight: ${({ $variant }) => (isBody($variant) ? "400" : "500")};
`;

const Typography = ({
  variant = Heading.H1,
  children,
  isBody = true,
  className,
  passedRef,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      $variant={variant}
      $isBody={isBody}
      className={className}
      ref={passedRef}
    >
      {children}
    </Text>
  );
};

export default Typography;
