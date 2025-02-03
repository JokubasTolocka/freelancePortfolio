import React, { useEffect, useRef, useState } from "react";
import { Composite, Engine, Sleeping, World } from "matter-js";
import styled from "styled-components";
import { useInView } from "motion/react";
import Typography, { Heading } from "../../../../components/Typography";
import { addLetterShapes } from "./addLetterShapes";
import { ADJUSTED_LETTER_POSITIONS } from "./utils";
import {
  addMouseDragHandling,
  createBoundingBox,
  handleExplosion,
} from "./matterJsUtils";
import { useGlobalContext } from "../../../../contexts/GlobalContext/useGlobalContext";

// For polygons with angles more than 180 degrees
// @ts-ignore
window.decomp = require("poly-decomp");

export interface Rectangle {
  letter: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angleRad: number;
  tranformOrigin: { x: number; y: number };
}

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  overflow: hidden;
`;

const Rectangle = styled.div`
  position: absolute;
  z-index: 8;
`;

const Letter = styled(Typography)`
  font-weight: 400;
  position: absolute;
`;

const MatterCanvas = () => {
  const { shouldExplode } = useGlobalContext();
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());
  const rectanglesRef = useRef<Rectangle[]>([]);
  const isCanvasInView = useInView(canvasRef);

  const [, setAnim] = useState(0);

  useEffect(() => {
    createBoundingBox(canvasRef, engineRef);
    addMouseDragHandling(canvasRef, engineRef);

    // Adjust world gravity
    // engineRef.current.gravity.y = 1;
    // engineRef.current.gravity.x = 1;
    return () => {
      World.clear(engineRef.current.world, false);
      Engine.clear(engineRef.current);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let i = 0;
      Composite.allBodies(engineRef.current.world).forEach((body) => {
        if (body.isStatic || body.isSleeping) return;

        const rect = rectanglesRef.current[i];

        const { x: adjustedX, y: adjustedY } =
          ADJUSTED_LETTER_POSITIONS[rect.letter];

        rect.x = body.position.x - rect.width / 2 - adjustedX;
        rect.y = body.position.y - rect.height / 2 - adjustedY;
        rect.angleRad = body.angle;

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

  const handleAddLetters = async () =>
    await addLetterShapes(canvasRef, engineRef, rectanglesRef);

  useEffect(() => {
    if (!canvasRef.current) return;

    const boundingClientRect = canvasRef.current.getBoundingClientRect();
    const { width, height } = boundingClientRect;
    // position explosion at the centre of the screen
    const centerPosition = {
      xPos: 0,
      yPos: height / 2,
    };

    if (shouldExplode) {
      handleAddLetters();
      setTimeout(() => handleExplosion(centerPosition, engineRef), 50);
    }

    // Handle explosion on click
    // canvasRef.current.addEventListener("click", handleExplosion);

    // return () => {
    //   canvasRef.current?.removeEventListener("click", handleExplosion);
    // };
  }, [shouldExplode]);

  const toggleBodiesSleeping = (shouldSleep: boolean) => {
    Composite.allBodies(engineRef.current.world).forEach((body) => {
      if (!body.isStatic) Sleeping.set(body, shouldSleep);
    });
  };

  useEffect(() => {
    toggleBodiesSleeping(!isCanvasInView);
  }, [isCanvasInView]);

  return (
    <Canvas ref={canvasRef}>
      {rectanglesRef.current.map(
        ({ x, y, width, height, angleRad, tranformOrigin, letter }, key) => (
          <Rectangle
            key={key}
            style={{
              top: y,
              left: x,
              width,
              height,
              rotate: `${angleRad}rad`,
              transformOrigin: `${tranformOrigin.x}px ${tranformOrigin.y}px`,
            }}
          >
            <Letter variant={Heading.H1}>{letter}</Letter>
          </Rectangle>
        )
      )}
    </Canvas>
  );
};

export default MatterCanvas;
