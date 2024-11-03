import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import LinkLine from "./LinkLine";
import Images from "./Images";
import TextEnterAnimation from "../../components/TextEnterAnimation";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 24px;
  flex: 1;
`;

const AboutSection = () => (
  <Wrapper>
    <TextWrapper>
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
    <Images />
  </Wrapper>
);

export default AboutSection;
