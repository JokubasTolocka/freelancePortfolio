import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import Typography from "../../components/Typography";
import LinkLine from "./LinkLine";
import Images from "./Images";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 24px;
  flex: 1;
`;

const AboutSection = () => (
  <Wrapper>
    <TextWrapper>
      <SectionTitle title="About" squiggleColor="green" />
      <Typography variant="BodyMd" isBody>
        My bold, colorful and organic designs draw from my background in street
        art, pop culture, and love for nature, travel, and discovery. I create
        engaging and intuitive user experiences that put emphasis on great
        design, eye-catching colorways, seamless interaction, and lasting
        impact.
      </Typography>
      <Typography variant="BodyMd" isBody>
        I am ready to improve your users' daily experience, create a business
        website, rebrand design, or even a simple poster.
      </Typography>
      <LinkLine />
    </TextWrapper>
    <Images />
  </Wrapper>
);

export default AboutSection;
