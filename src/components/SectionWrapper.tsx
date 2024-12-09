import React, { PropsWithChildren } from "react";
import { ComplimentaryColors } from "../utils/theme";
import styled from "styled-components";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.div<{ $isVerticallyCentered?: boolean }>`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  min-height: 775px;
  margin-top: 72px;
  padding-bottom: 96px;
  display: ${({ $isVerticallyCentered }) =>
    $isVerticallyCentered ? "flex" : "block"};
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 64px;
  margin-bottom: 48px;

  & > * {
    flex: 1;
  }
`;

type Props = {
  titles: string[];
  squiggleColors: ComplimentaryColors[];
  isVerticallyCentered?: boolean;
};

const SectionWrapper = ({
  children,
  titles,
  isVerticallyCentered,
}: PropsWithChildren<Props>) => (
  <Wrapper $isVerticallyCentered={isVerticallyCentered}>
    <Container>
      <TitleWrapper>
        {titles.map((title, index) => (
          <SectionTitle title={title} key={title + index} />
        ))}
      </TitleWrapper>
      {children}
    </Container>
  </Wrapper>
);

export default SectionWrapper;
