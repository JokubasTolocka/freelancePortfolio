import React from "react";
import styled from "styled-components";
import Typography, { Body } from "../../components/Typography";
import LinkLine from "./LinkLine";
import PortraitImage from "./PortraitImage";
import Button from "../../components/Button";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;
  margin: 10px 40px 200px 40px;
  height: 420px;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const AboutSection = () => (
  <Wrapper>
    <PortraitImage />
    <TextWrapper>
      <Typography variant={Body.LG}>
        My name is Jokubas. After working in the tech industry for over half a
        decade I have decided to expand my expertise to working with clients
        showing off my development and design skills that I have gained over the
        past 5 years working for startups and corporate companies.
      </Typography>
    </TextWrapper>
    <TextWrapper>
      <Typography variant={Body.LG}>
        I am ready to improve your users' daily experience, create a business
        website, rebrand design, or an experience-oriented web project.
        <br />
        <br />
        <LinkLine />
      </Typography>
    </TextWrapper>
    <Button onClick={() => {}}>Contact</Button>
  </Wrapper>
);

export default AboutSection;
