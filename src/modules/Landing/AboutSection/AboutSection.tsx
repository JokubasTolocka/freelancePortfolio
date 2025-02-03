import React from "react";
import styled from "styled-components";
import Typography, { Body, Heading } from "../../../components/Typography";
import LinkLine from "./LinkLine";
import Button from "../../../components/Button";
import CheckIcon from "../../../assets/icons/check.svg";
import PortraitImage from "./PortraitImage";
import { useGlobalContext } from "../../../contexts/GlobalContext/useGlobalContext";

const DESIGN_SERVICES = ["UI/UX Design", "Logo Design", "Branding"];

const DEVELOPMENT_SERVICES = [
  "App Development",
  "Website Development",
  "Single-page websites",
  "Multi-page websites",
];

const AboutSection = () => {
  const { openContactPopup } = useGlobalContext();

  return (
    <Wrapper>
      <PortraitImage />
      <TextWrapper>
        <Name variant={Heading.H3}>
          Jokubas
          <br />
          Tolocka
        </Name>
        <Typography variant={Body.LG}>
          After working in the tech industry for over half a decade I have
          decided to expand my expertise to working with clients showing off my
          development and design skills that I have gained over the past 5 years
          working for startups and corporate companies. <br /> <br />
          I am ready to improve your users' daily experience, create a business
          website, rebrand design, or an experience-oriented web project. <br />
          <br />
          <LinkLine />
        </Typography>
      </TextWrapper>
      <Typography variant={Body.LG}>
        <TextWrapper>
          <ServicesWrapper>
            <Typography variant={Heading.H5}>Services</Typography>
            <List style={{ marginBottom: "20px" }}>
              {DESIGN_SERVICES.map((name) => (
                <ListItemWrapper key={name}>
                  <StyledCheckIcon />
                  {name}
                </ListItemWrapper>
              ))}
            </List>
            <List>
              {DEVELOPMENT_SERVICES.map((name) => (
                <ListItemWrapper key={name}>
                  <StyledCheckIcon />
                  {name}
                </ListItemWrapper>
              ))}
            </List>
          </ServicesWrapper>
        </TextWrapper>
      </Typography>
      <TextWrapper>
        <Button onClick={openContactPopup}>Contact</Button>
      </TextWrapper>
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;
  margin: 10px 40px 200px 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Name = styled(Typography)`
  position: absolute;
  top: 80px;
`;

const StyledCheckIcon = styled(CheckIcon)`
  fill: ${({ theme }) => theme.colors.white};
`;

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
