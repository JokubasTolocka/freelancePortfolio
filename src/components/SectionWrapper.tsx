import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import { useHeaderTitleContext } from "../contexts/HeaderTitleContext/useHeaderTitleContext";

const Wrapper = styled.div<{ $isVerticallyCentered?: boolean }>`
  display: flex;
  flex-direction: column;
`;

type Props = {
  title?: SectionTitleEnum;
  titleRightElement?: ReactNode;
};

const SectionWrapper = ({
  children,
  title,
  titleRightElement,
}: PropsWithChildren<Props>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { titleValue, setHeaderTitle } = useHeaderTitleContext();
  const [distanceTopFromTop, distanceBottomFromTop] = useMemo(() => {
    if (!wrapperRef.current) return [0, 0];

    const elementTop = wrapperRef.current?.getBoundingClientRect().top;
    const elementBottom = wrapperRef.current?.getBoundingClientRect().bottom;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return [elementTop + scrollTop, elementBottom + scrollTop];
  }, []);

  const myScrollFunction = () => {
    if (!wrapperRef.current) return;

    const distanceViewportTopToTop = window.scrollY;

    // If element has reached the top of the viewport
    if (
      distanceViewportTopToTop > distanceTopFromTop &&
      distanceViewportTopToTop < distanceBottomFromTop &&
      title !== titleValue
    )
      setHeaderTitle(title ?? SectionTitleEnum.EmptyTitle);
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrollFunction);

    return () => {
      window.removeEventListener("scroll", myScrollFunction);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {title && <SectionTitle title={title} rightElement={titleRightElement} />}
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
