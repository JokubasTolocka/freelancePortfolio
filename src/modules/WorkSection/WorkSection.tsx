import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import muralImg from "../../assets/images/mural.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkSection = () => (
  <Wrapper>
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
  </Wrapper>
);

export default WorkSection;
