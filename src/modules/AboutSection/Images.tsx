import { easeIn, easeOut, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
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
  align-items: center;
  position: relative;
  transform: translateY(-60px);
`;

const Content = styled.div`
  position: relative;
  height: 300px;
  width: 275px;
`;

const repeatingStyles = css`
  position: absolute;
  right: 0;
`;

const YellowStarWrapper = styled.div`
  ${repeatingStyles}
  z-index: 0;
  left: 5px;
  top: 5px;
`;

const GreenShapeWrapper = styled.div`
  ${repeatingStyles}
  z-index: 0;
  right: 10px;
  bottom: -15px;
`;

const BlossomWrapper = styled.div`
  ${repeatingStyles}
  z-index: 3;
  left: 0;
  top: 120px;
`;

const MapWrapper = styled.div`
  ${repeatingStyles}
  z-index: 3;
  right: 20px;
  top: 30px;
`;

const CampSiteWrapper = styled.div`
  ${repeatingStyles}
  z-index: 3;
  bottom: -40px;
  right: 80px;
`;

const StyledPortraitImage = styled.img`
  ${repeatingStyles}
  width: 250px;
  z-index: 1;
  left: 0;
`;

const StyledMuralImage = styled.img`
  ${repeatingStyles}
  width: 212px;
  z-index: 2;
  top: 15px;
`;

const Images = () => {
  const yellowStarRef = useRef(null);
  const greenShapeRef = useRef(null);
  const blossomRef = useRef(null);
  const mapRef = useRef(null);
  const campsiteRef = useRef(null);
  const muralImageRef = useRef(null);
  const portraitImageRef = useRef(null);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.3 });

  const returnAnimationState = () => {
    if (
      !yellowStarRef.current ||
      !greenShapeRef.current ||
      !blossomRef.current ||
      !mapRef.current ||
      !campsiteRef.current ||
      !muralImageRef.current ||
      !portraitImageRef.current
    )
      return;

    animate(yellowStarRef.current, { x: 0, y: 0, rotate: 0 });
    animate(greenShapeRef.current, { x: 0, y: 0 });
    animate(blossomRef.current, { x: 0, y: 0, rotate: 0 });
    animate(mapRef.current, { x: 0, y: 0, rotate: 0 });
    animate(campsiteRef.current, { x: 0, y: 0 });
    animate(muralImageRef.current, { x: 0, y: 0 });
    animate(portraitImageRef.current, { x: 0, y: 0 });
  };

  const animateObjects = () => {
    if (
      !yellowStarRef.current ||
      !greenShapeRef.current ||
      !blossomRef.current ||
      !mapRef.current ||
      !campsiteRef.current ||
      !muralImageRef.current ||
      !portraitImageRef.current
    )
      return;

    const animationProps = {
      duration: 0.4,
      ease: easeOut,
    };

    animate(
      yellowStarRef.current,
      { x: -90, y: 5, rotate: 90 },
      animationProps
    );
    animate(greenShapeRef.current, { x: 10, y: 40 }, animationProps);
    animate(
      blossomRef.current,
      { x: -75, y: -10, rotate: -10 },
      animationProps
    );
    animate(mapRef.current, { x: 2, y: -40, rotate: 5 }, animationProps);
    animate(campsiteRef.current, { x: -20, y: 40 }, animationProps);
    animate(muralImageRef.current, { x: 0, y: -50 }, animationProps);
    animate(portraitImageRef.current, { x: -60, y: 40 }, animationProps);
  };

  useEffect(() => {
    if (isInView) return animateObjects();
    returnAnimationState();
  }, [isInView]);

  return (
    <Wrapper>
      <Content ref={scope}>
        <YellowStarWrapper ref={yellowStarRef}>
          <YellowStar />
        </YellowStarWrapper>
        <GreenShapeWrapper ref={greenShapeRef}>
          <GreenShape />
        </GreenShapeWrapper>
        <BlossomWrapper ref={blossomRef}>
          <Blossom />
        </BlossomWrapper>
        <MapWrapper ref={mapRef}>
          <Map />
        </MapWrapper>
        <CampSiteWrapper ref={campsiteRef}>
          <CampSite />
        </CampSiteWrapper>
        <StyledMuralImage src={meMuralImage} ref={muralImageRef} />
        <StyledPortraitImage src={myPhotoImage} ref={portraitImageRef} />
      </Content>
    </Wrapper>
  );
};

export default Images;
