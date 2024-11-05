import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import ListItem from "./ListItem";
import { motion, useAnimate } from "framer-motion";

const items = [
  {
    title: "Frontend Engineer",
    employer: "FinBytes",
    duration: "Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    id: 1,
  },
  {
    title: "Frontend Engineer",
    employer: "FinBytes1",
    duration: "Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    id: 2,
  },
  {
    title: "Frontend Engineer",
    employer: "FinBytes2",
    duration: "Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    id: 3,
  },
  {
    title: "Frontend Engineer",
    employer: "FinBytes3",
    duration: "Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    id: 4,
  },
];

const Wrapper = styled.div`
  border-right: ${({ theme }) => `4px solid ${theme.colors.black}`};
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  gap: 32px;
`;

const DescriptionContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  padding: 32px;
  padding-top: 118px;
  cursor: pointer;
`;

const Experience = () => {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();

  const handleSetExpandedId = async (id: number | null) => {
    if (!descriptionRef.current) return;

    const tempExpandedId = id;

    setExpandedItemId(id);

    console.log(tempExpandedId);

    animate(
      descriptionRef.current,
      {
        opacity: tempExpandedId ? 0 : 100,
        filter: tempExpandedId ? "blur(2px)" : "blur(0)",
      },
      { delay: tempExpandedId ? 0 : 0.8, duration: 0.2, ease: "easeInOut" }
    );
  };

  const animateDescription = () => {
    if (!descriptionRef.current) return;

    animate(
      descriptionRef.current,
      {
        opacity: expandedItemId ? 0 : 100,
        filter: expandedItemId ? "blur(2px)" : "blur(0)",
      },
      { delay: expandedItemId ? 0 : 0.8, duration: 0.2, ease: "easeInOut" }
    );
  };

  return (
    <Wrapper>
      <Content ref={containerRef}>
        {items.map(({ ...listItemProps }) => (
          <ListItem
            key={listItemProps.employer}
            {...listItemProps}
            containerRef={containerRef}
            expandedItemId={expandedItemId}
            handleSetExpandedId={handleSetExpandedId}
          />
        ))}
      </Content>
      <DescriptionContainer
        ref={descriptionRef}
        onClick={() => handleSetExpandedId(null)}
      >
        <Typography isBody variant="BodySm">
          {expandedItemId && items[expandedItemId - 1].description}
        </Typography>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default Experience;
