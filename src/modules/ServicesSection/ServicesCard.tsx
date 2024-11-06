import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";

const Wrapper = styled.div<{ $shouldHaveRightBorder: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  border-right: ${({ theme, $shouldHaveRightBorder }) =>
    $shouldHaveRightBorder ? `4px solid ${theme.colors.black}` : "none"};
`;

const ImageWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px;
  margin-bottom: 64px;
  height: 100%;
`;

type Props = {
  title: string;
  description: string;
  elementIndex: number;
};

const ServicesCard = ({ title, description, elementIndex }: Props) => (
  <Wrapper $shouldHaveRightBorder={elementIndex % 3 !== 0}>
    <ImageWrapper></ImageWrapper>
    <ContentWrapper>
      <Typography variant="Heading3">{title}</Typography>
      <Typography variant="Heading6" isBody>
        {description}
      </Typography>
    </ContentWrapper>
  </Wrapper>
);

export default ServicesCard;
