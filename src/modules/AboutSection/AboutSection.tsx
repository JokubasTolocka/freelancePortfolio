import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import LinkLine from "./LinkLine";
import TextEnterAnimation from "../../components/TextEnterAnimation";
import PortraitImage from "./PortraitImage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 64px;
  height: fit-content;
`;

const AboutSection = () => (
  <Wrapper>
    <PortraitImage />
    <TextWrapper>
      <TextEnterAnimation>
        <Typography variant="Heading2">Jokūbas Toločka</Typography>
      </TextEnterAnimation>
      <TextEnterAnimation>
        <Typography variant="BodyMd" isBody>
          My bold, colorful and organic designs draw from my background in
          street art, pop culture, and love for nature, travel, and discovery. I
          create engaging and intuitive user experiences that put emphasis on
          great design, eye-catching colorways, seamless interaction, and
          lasting impact.
        </Typography>
      </TextEnterAnimation>
      <TextEnterAnimation>
        <Typography variant="BodyMd" isBody>
          I am ready to improve your users' daily experience, create a business
          website, rebrand design, or even a simple poster.
        </Typography>
      </TextEnterAnimation>
      <TextEnterAnimation>
        <LinkLine />
      </TextEnterAnimation>
    </TextWrapper>
  </Wrapper>
);

export default AboutSection;
