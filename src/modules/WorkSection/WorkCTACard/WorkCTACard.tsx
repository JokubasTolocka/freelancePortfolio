import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CARD_HEIGHT } from "../../../components/Card";
import { useInView } from "framer-motion";
import { Composite, Engine, World } from "matter-js";
import {
  addMouseDragHandling,
  createBoundingBox,
} from "../../LandingSection/MatterCanvas/matterJsUtils";
import Typography, { Heading } from "../../../components/Typography";
import { addTextBlocks, TextBlock } from "./utils";
import CTAText from "./CTAText";
import { BORDER_STYLE } from "../../../utils/globalStyles";

const WorkCTACard = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());
  const isCanvasInView = useInView(canvasRef, { margin: "-50px" });
  const blocksRef = useRef<TextBlock[]>([]);

  const [, setAnim] = useState(0);
  const [haveBlocksSpawned, setHaveBlocksSpawned] = useState(false);

  useEffect(() => {
    createBoundingBox(canvasRef, engineRef, 800);
    addMouseDragHandling(canvasRef, engineRef);

    return () => {
      World.clear(engineRef.current.world, false);
      Engine.clear(engineRef.current);
    };
  }, []);

  useEffect(() => {
    if (isCanvasInView && !haveBlocksSpawned) {
      addTextBlocks(canvasRef, engineRef, blocksRef);
      setHaveBlocksSpawned(true);
    }
  }, [isCanvasInView]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let i = 0;
      Composite.allBodies(engineRef.current.world).forEach((body) => {
        if (body.isStatic || body.isSleeping) return;

        const block = blocksRef.current[i];

        block.x = body.position.x - block.width / 2;
        block.y = body.position.y - block.height / 2;
        block.angleRad = body.angle;

        i += 1;
      });

      // This is needed for component render update
      setAnim((x) => x + 1);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Wrapper>
      <CTAText />
      <Canvas ref={canvasRef}></Canvas>
      {blocksRef.current.map(
        (
          {
            width,
            height,
            x,
            y,
            angleRad,
            tranformOrigin,
            title,
            backgroundColor,
            color,
          },
          index
        ) => (
          <Block
            style={{
              width,
              height,
              top: y,
              left: x,
              rotate: `${angleRad}rad`,
              transformOrigin: `${tranformOrigin.x}px ${tranformOrigin.y}px`,
              backgroundColor,
              color,
            }}
            key={`${title}-${index}`}
          >
            <StyledTypography variant={Heading.H5}>{title}</StyledTypography>
          </Block>
        )
      )}
    </Wrapper>
  );
};

export default WorkCTACard;

const Wrapper = styled.div`
  width: 100%;
  height: ${CARD_HEIGHT}px;
  border-bottom: ${BORDER_STYLE};
  color: ${({ theme }) => theme.colors.black.dark};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Canvas = styled.div`
  width: 100%;
  height: ${CARD_HEIGHT - 4}px;
  position: absolute;
  z-index: 3;
  overflow: hidden;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: absolute;
  border-radius: 100px;
  z-index: 1;
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => `${theme.colors.black.dark} !important`};
`;
