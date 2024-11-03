import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const BoundingBox = styled.div<{ $isHeader?: boolean }>`
  max-width: ${(props) => (props.$isHeader ? "1280px" : "1088px")};
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

type Props = {
  className?: string;
  isHeader?: boolean;
};

const Container = ({
  children,
  className,
  isHeader,
}: PropsWithChildren<Props>) => (
  <BoundingBox className={className} $isHeader={isHeader}>
    {children}
  </BoundingBox>
);

export default Container;
