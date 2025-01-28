import React from "react";
import styled from "styled-components";
import muralImg from "../../assets/images/mural.jpg";
import BrowseAllWorkButton from "./BrowseAllWorkButton";
import Card from "../../components/Card/Card";

const WorkSection = () => (
  <Wrapper>
    <CardWrapper>
      <Card
        title="Murals worldwide"
        subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
        imageSrc={muralImg}
        tags={[
          "Branding",
          "Design",
          "App Design",
          "Web Design",
          "Illustration",
        ]}
        linkTo="/murals"
      />
      <Card
        title="Murals worldwide"
        subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
        imageSrc={muralImg}
        linkTo="/murals"
      />
      <Card
        title="Murals worldwide"
        subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
        imageSrc={muralImg}
        linkTo="/murals"
      />
      <Card
        title="Murals worldwide"
        subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
        imageSrc={muralImg}
        linkTo="/murals"
      />
      {/* <WorkCTACard /> */}
    </CardWrapper>
    <FooterWrapper>
      <BrowseAllWorkButton title="Browse all work" />
    </FooterWrapper>
  </Wrapper>
);

export default WorkSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  gap: 10px;
`;

const FooterWrapper = styled.div`
  display: flex;
  margin: 30px 40px;
  justify-content: flex-end;
`;
