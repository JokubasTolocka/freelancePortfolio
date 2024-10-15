import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import Blossom from "../../assets/icons/blossom.svg";
import CampSite from "../../assets/icons/campSite.svg";
import GreenShape from "../../assets/icons/greenShape.svg";
import YellowStar from "../../assets/icons/yellowStar.svg";
import Map from "../../assets/icons/map.svg";
import meMuralImage from "../../assets/images/meMural.png";
import myPhotoImage from "../../assets/images/portrait.png";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  width: 250px;
`;

const StyledYellowStar = styled(YellowStar)`
  position: absolute;
`;

const StyledGreenShape = styled(GreenShape)`
  position: absolute;
`;

const StyledBlossom = styled(Blossom)`
  position: absolute;
`;

const StyledMap = styled(Map)`
  position: absolute;
`;

const StyledCampSite = styled(CampSite)`
  position: absolute;
`;

const StyledPortraitImage = styled.img`
  position: absolute;
  width: 250px;
`;

const StyledMuralImage = styled.img`
  position: absolute;
  width: 212px;
`;

const Images = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <Wrapper>
      <Content>
        <StyledYellowStar />
        <StyledGreenShape />
        <StyledBlossom />
        <StyledMap />
        <StyledCampSite />
        <StyledMuralImage src={meMuralImage} />
        <StyledPortraitImage src={myPhotoImage} />
      </Content>
    </Wrapper>
  );
};

export default Images;
