import {
  cubicBezier,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import styled, { useTheme } from "styled-components";

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1 },
};

const animationProps = {
  initial: "hidden",
  animate: "visible",
  transition: { duration: 4, ease: [0.33, 1, 0.68, 1] },
  strokeDasharray: "0 1",
  variants: lineVariants,
};

const AnimatedLine = () => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const _ = useInView(ref);
  const { scrollY } = useScroll();

  const top = useTransform(scrollY, [0, 650], [255, 240], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  const scale = useTransform(scrollY, [0, 650], [1, 0.98], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  return (
    <Wrapper ref={ref}>
      <WrapperSVG
        style={{ top, scale }}
        width="2120"
        height="272"
        viewBox="0 0 2120 272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          {...animationProps}
          d="M1 227.3C171.8 146.9 296.844 211.863 357.5 236.366C394.548 251.333 470.288 292.634 557 236.366C619.91 195.545 775.937 93.4918 760.818 211.863C745.699 330.235 911.62 242.727 1058.29 153.494C1190 73.3665 1412.16 -10.5935 1326.35 163.29C1240.54 337.174 1550.24 232.468 1647.5 182.801C1824.5 92.4167 2282.67 -157.7 2055.5 153.493"
          stroke="url(#paint0_linear_1404_1134)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1404_1134"
            x1="184"
            y1="164.8"
            x2="2475.5"
            y2="135.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.015" stopColor={theme.colors.black.dark} />
            <stop offset="0.275" stopColor="#2A6CD0" />
            <stop offset="0.735" stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.black.dark} />
          </linearGradient>
        </defs>
      </WrapperSVG>
    </Wrapper>
  );
};

export default AnimatedLine;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperSVG = styled(motion.svg)`
  position: absolute;
  top: 255px;
`;
