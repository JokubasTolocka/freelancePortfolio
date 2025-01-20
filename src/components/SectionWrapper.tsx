import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import { useHeaderTitleContext } from "../contexts/HeaderTitleContext/useHeaderTitleContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  title?: SectionTitleEnum;
  titleRightElement?: ReactNode;
  shouldShowTitle?: boolean;
};

const SectionWrapper = ({
  children,
  title,
  titleRightElement,
  shouldShowTitle = true,
}: PropsWithChildren<Props>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { titleValue, setHeaderTitle } = useHeaderTitleContext();

  const getDistances = useCallback(() => {
    if (!wrapperRef.current) return [0, 0];

    const elementTop = wrapperRef.current?.getBoundingClientRect().top;
    const elementBottom = wrapperRef.current?.getBoundingClientRect().bottom;
    const scrollTop = window.scrollY;

    return [elementTop + scrollTop, elementBottom + scrollTop];
  }, []);

  const myScrollFunction = () => {
    if (!wrapperRef.current) return;

    const distanceViewportTopToTop = window.scrollY;
    const [distanceTopFromTop, distanceBottomFromTop] = getDistances();

    // If element has reached the top of the viewport
    if (
      distanceViewportTopToTop > distanceTopFromTop &&
      distanceViewportTopToTop < distanceBottomFromTop &&
      title !== titleValue
    )
      setHeaderTitle(title ?? SectionTitleEnum.Landing);
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrollFunction);

    return () => {
      window.removeEventListener("scroll", myScrollFunction);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {title && shouldShowTitle && (
        <SectionTitle title={title} rightElement={titleRightElement} />
      )}
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
