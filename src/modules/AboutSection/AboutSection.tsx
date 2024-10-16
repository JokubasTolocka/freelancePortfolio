import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import Typography from "../../components/Typography";
import LinkLine from "./LinkLine";
import Images from "./Images";
import { useAnimate, useInView } from "framer-motion";

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

const ParagraphWrapper = styled.div`
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.3s, transform 0.3s;
`;

const AboutSection = () => {
  const [_, animate] = useAnimate();

  const firstParagraphRef = useRef<HTMLDivElement>(null);
  const secondParagraphRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);

  const isFirstParagraphInView = useInView(firstParagraphRef, { amount: 0.3 });
  const isSecondParagraphInView = useInView(secondParagraphRef, {
    amount: 0.3,
  });
  const isBottomLineInView = useInView(bottomLineRef, { amount: 0.3 });

  const animateFirstParagraph = (paragraphRef: HTMLDivElement) =>
    animate(paragraphRef, { x: 0, opacity: 1 }, { duration: 0.2 });

  useEffect(() => {
    if (isFirstParagraphInView && firstParagraphRef.current)
      animateFirstParagraph(firstParagraphRef.current);
    if (isSecondParagraphInView && secondParagraphRef.current)
      animateFirstParagraph(secondParagraphRef.current);
    if (isBottomLineInView && bottomLineRef.current)
      animateFirstParagraph(bottomLineRef.current);
  }, [isFirstParagraphInView, isSecondParagraphInView, isBottomLineInView]);

  return (
    <Wrapper>
      <TextWrapper>
        <SectionTitle title="About" squiggleColor="green" />
        <ParagraphWrapper ref={firstParagraphRef}>
          <Typography variant="BodyMd" isBody>
            My bold, colorful and organic designs draw from my background in
            street art, pop culture, and love for nature, travel, and discovery.
            I create engaging and intuitive user experiences that put emphasis
            on great design, eye-catching colorways, seamless interaction, and
            lasting impact.
          </Typography>
        </ParagraphWrapper>
        <ParagraphWrapper ref={secondParagraphRef}>
          <Typography variant="BodyMd" isBody>
            I am ready to improve your users' daily experience, create a
            business website, rebrand design, or even a simple poster.
          </Typography>
        </ParagraphWrapper>
        <ParagraphWrapper ref={bottomLineRef}>
          <LinkLine />
        </ParagraphWrapper>
      </TextWrapper>
      <Images />
    </Wrapper>
  );
};

export default AboutSection;
