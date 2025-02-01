import React from "react";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: relative;
  display: block;
  overflow: hidden;
`;

const Text = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

const FlipText = ({ children }: PropsWithChildren) => (
  <Wrapper initial="initial" whileHover="hovered">
    <motion.div
      variants={{
        initial: { y: 0 },
        hovered: { y: "-100%" },
      }}
    >
      {children}
    </motion.div>
    <Text
      variants={{
        initial: { y: "100%" },
        hovered: { y: 0 },
      }}
    >
      {children}
    </Text>
  </Wrapper>
);

export default FlipText;
