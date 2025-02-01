import {
  cubicBezier,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import React, { PropsWithChildren, useRef } from "react";

const ListItemEnterWrapper = ({ children }: PropsWithChildren) => {
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
    <motion.div ref={ref} style={{ x }}>
      {children}
    </motion.div>
  );
};

export default ListItemEnterWrapper;
