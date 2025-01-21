import React, { useRef } from "react";
import styled from "styled-components";
import { ListItemType } from "./List";
import Typography, { Body } from "../Typography";
import {
  cubicBezier,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

interface Props {
  item: ListItemType;
}

const ListItem = ({ item }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const _ = useInView(ref);
  const { scrollY } = useScroll({ target: ref });

  const distanceToTop =
    window.scrollY +
    (ref.current?.getBoundingClientRect().top ?? 0) -
    window.innerHeight;

  const x = useTransform(
    scrollY,
    [distanceToTop, distanceToTop + 400],
    [800, 0],
    { ease: cubicBezier(0.33, 1, 0.68, 1) }
  );

  return (
    <Wrapper ref={ref}>
      <Content style={{ x }}>
        <StyledTypography variant={Body.LG}>
          <div>
            {item.position}
            {item.place ? ` @ ${item.position}` : ""}
          </div>
          <div>{item.time}</div>
        </StyledTypography>
      </Content>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled(motion.div)`
  padding: 20px 0px;
  overflow: hidden;
`;

const Content = styled(motion.div)``;

const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: space-between;
`;
