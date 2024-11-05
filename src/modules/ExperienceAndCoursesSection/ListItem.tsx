import React, { Dispatch, RefObject, useEffect, useRef, useState } from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";
import { motion, useAnimate } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DurationText = styled(Typography)`
  color: ${({ theme }) => theme.colors.gray};
`;

type Props = {
  employer: string;
  title: string;
  duration: string;
  containerRef: RefObject<HTMLDivElement>;
  id: number;
  expandedItemId: number | null;
  handleSetExpandedId: (id: number | null) => void;
};

const ListItem = ({
  employer,
  title,
  duration,
  containerRef,
  id,
  expandedItemId,
  handleSetExpandedId,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => {
    if (!ref.current) return;

    setIsExpanded(!isExpanded);
    handleSetExpandedId(isExpanded ? null : id);
    animate(
      ref.current,
      { y: isExpanded ? 0 : -distanceFromTop },
      { duration: 0.3, ease: "easeInOut", delay: isExpanded ? 0 : 0.6 }
    );
  };

  const animateLeave = () => {
    if (!ref.current) return;

    animate(
      ref.current,
      {
        filter: expandedItemId ? "blur(2px)" : "blur(0)",
        opacity: expandedItemId ? 0 : 100,
      },
      { duration: 0.3, ease: "easeInOut", delay: 0.1 * id }
    );
  };

  useEffect(() => {
    if (expandedItemId !== id) animateLeave();
    if (isExpanded && !expandedItemId) onExpand();
  }, [expandedItemId]);

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const childRect = ref.current.getBoundingClientRect();

    const calculatedDistance = childRect.top - parentRect.top;

    setDistanceFromTop(calculatedDistance);
  }, []);

  return (
    <Wrapper key={employer} ref={ref} onClick={onExpand}>
      <Typography variant="Heading5">{title}</Typography>
      <RightContent>
        <Typography variant="Heading5">{employer}</Typography>
        <DurationText variant="BodyXs" isBody>
          {duration}
        </DurationText>
      </RightContent>
    </Wrapper>
  );
};

export default ListItem;
