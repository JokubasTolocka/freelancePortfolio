import React, { useEffect, useRef, useState } from "react";
import { Composite, Engine, World } from "matter-js";
import styled from "styled-components";
import Typography from "../../../components/Typography";

import { ADJUSTED_LETTER_POSITIONS } from "./utils";
import { FALL_ANIMATION_DELAY_SECONDS } from "../LandingSection";
import {
  addMouseDragHandling,
  createBoundingBox,
  handleExplosion,
} from "./matterJsUtils";
import { addLetterShapes } from "./addLetterShapes";

// For polygons with angles more than 180 degrees like L or E
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
  /* background-color: rgba(217, 84, 12, 0.2); */
  position: absolute;
`;

const Letter = styled(Typography)`
  font-weight: 500;
`;

const MatterCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());
  const rectanglesRef = useRef<Rectangle[]>([]);

  const [, setAnim] = useState(0);

  useEffect(() => {
    createBoundingBox(canvasRef, engineRef);
    addMouseDragHandling(canvasRef, engineRef);

    // Adjust world gravity
    // engineRef.current.gravity.y = 0.2;
    return () => {
      World.clear(engineRef.current.world, false);
      Engine.clear(engineRef.current);
    };
  }, []);

  useEffect(() => {
    const handleAddLetterShapes = () =>
      addLetterShapes(canvasRef, engineRef, rectanglesRef);

    setTimeout(handleAddLetterShapes, FALL_ANIMATION_DELAY_SECONDS * 1000);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let i = 0;
      Composite.allBodies(engineRef.current.world).forEach((body) => {
        if (body.isStatic) return;

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

  useEffect(() => {
    if (!canvasRef.current) return;

    const boundingClientRect = canvasRef.current.getBoundingClientRect();
    const { width, height } = boundingClientRect;

    setTimeout(
      () =>
        handleExplosion(
          {
            // position explosion at the centre of the screen
            layerX: width / 2,
            layerY: height / 2,
          } as MouseEvent,
          engineRef
        ),
      FALL_ANIMATION_DELAY_SECONDS * 1000 + 50
    );

    // Handle explosion on click
    // canvasRef.current.addEventListener("click", handleExplosion);

    // return () => {
    //   canvasRef.current?.removeEventListener("click", handleExplosion);
    // };
  }, []);

  return (
    <Canvas ref={canvasRef}>
      {rectanglesRef.current.map((rectangle, key) => {
        const { x, y, width, height, angleRad, tranformOrigin } = rectangle;

        return (
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
            <Letter variant="Header">{rectangle.letter}</Letter>
          </Rectangle>
        );
      })}
    </Canvas>
  );
};

export default MatterCanvas;
