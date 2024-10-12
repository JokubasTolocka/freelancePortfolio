import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const BoundingBox = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

type Props = {
  className?: string;
};

const Container = ({ children, className }: PropsWithChildren<Props>) => (
  <BoundingBox className={className}>{children}</BoundingBox>
);

export default Container;
