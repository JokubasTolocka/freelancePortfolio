import React from "react";
import styled from "styled-components";
import PotentialProject from "./CTACard";
import Card from "../../components/Card";
import muralImg from "../../assets/images/mural.jpg";

const WorksWrapper = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
`;

const WorkSection = () => (
  <WorksWrapper>
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
    <PotentialProject />
  </WorksWrapper>
);

export default WorkSection;
