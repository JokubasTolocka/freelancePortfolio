import React, { useEffect, useRef, useState } from "react";
import { Bodies, Composite, Engine, Vertices, World } from "matter-js";
import styled from "styled-components";
import Typography from "../../../components/Typography";

import {
  createBoundingBox,
  getAdjustedPosition,
  pathDataToString,
} from "./utils";
import opentype, { Font } from "opentype.js";

// For polygons with angles more than 180 degrees like L or E
// @ts-ignore
window.decomp = require("poly-decomp");

interface Rectangle {
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
  /* background: rgba(57, 150, 68, 0.5); */
  overflow: hidden;
`;

const Rectangle = styled.div`
  /* background-color: rgba(217, 84, 12, 0.2); */
  position: absolute;
`;

const Letter = styled(Typography)`
  font-weight: 500;
`;

const DOTTER_LETTERS_ARR = ["i", "j"];

// matterJS letter bodies are slightly off the letters in the DOM. We adjust matterJS positions
const adjustedLetterPositions = getAdjustedPosition();

const MatterCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const rectangles = useRef<Rectangle[]>([]);
  const engine = useRef(Engine.create());

  const [, setAnim] = useState(0);

  useEffect(() => {
    createBoundingBox(canvasRef, engine);

    return () => {
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
    };
  }, []);

  useEffect(() => {
    // showCanvasShapes(canvasRef, engine);

    // Adjust world gravity
    // engine.current.gravity.y = 0.2;

    const addLetterRectangles = () => {
      if (!canvasRef.current) return;

      const letterContainers = document.getElementsByClassName("letter");

      const containerY = canvasRef.current.getBoundingClientRect().top;
      const containerX = canvasRef.current.getBoundingClientRect().left;

      let loadedFont: Font;

      opentype.load("./fonts/Poppins-Medium.ttf", (err, font) => {
        if (err || !font) console.log("Could not load font: " + err);
        else {
          loadedFont = font;

          // MATTERJS EXPLOSION
          // https://github.com/liabru/matter-js/blob/master/examples/timescale.js

          Array.from(letterContainers).forEach((letterContainer: Element) => {
            const { textContent } = letterContainer;

            // Don't add spaces
            if (!textContent?.trim()) return;

            const boundingClientRect = letterContainer.getBoundingClientRect();

            const { width, height } = boundingClientRect;
            const x = boundingClientRect.x - containerX;
            const y = boundingClientRect.y - containerY;

            const letterPath = loadedFont.getPath(textContent, 0, 0, 90);

            // Get vertices string from path data;
            const verticesString = pathDataToString(
              letterPath,
              DOTTER_LETTERS_ARR.includes(textContent)
            );
            // Make makerjs Vertices array from vertices string
            // @ts-ignore
            const letterVertices = Vertices.fromPath(verticesString);

            // Some letters get rendered a bit off their supposed centre, this will handle it
            const { x: adjustedX, y: adjustedY } =
              adjustedLetterPositions[textContent];

            // Letters that throw errors are j,x,X,L,N
            // I am not using them in my heading so will ignore this for now
            try {
              const letterBody = Bodies.fromVertices(
                x + width / 2 + adjustedX,
                y + height / 2 + 15 + adjustedY,
                [letterVertices],
                {
                  mass: 1,
                  restitution: 1,
                  friction: 0.005,
                  // isStatic: true,
                  render: {
                    fillStyle: "rgba(190, 228, 16, 0.2);",
                    strokeStyle: "#05ff01",
                    lineWidth: 4,
                  },
                }
              );

              Composite.add(engine.current.world, letterBody);

              rectangles.current.push({
                letter: textContent,
                x,
                y,
                width,
                height,
                angleRad: 0,
                // Get centre of mass for transform origin
                tranformOrigin: {
                  x: width - (x + width - letterBody.position.x),
                  y: height - (y + height - letterBody.position.y),
                },
              });
            } catch (error) {
              console.error("Error processing letter body:", error);
            }
          });
        }
      });
    };

    // addLetterRectangles();
    setTimeout(addLetterRectangles, 500);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let i = 0;
      Composite.allBodies(engine.current.world).forEach((body) => {
        if (body.isStatic) return;

        const rect = rectangles.current[i];

        const { x: adjustedX, y: adjustedY } =
          adjustedLetterPositions[rect.letter];

        rect.x = body.position.x - rect.width / 2 - adjustedX;
        rect.y = body.position.y - rect.height / 2 - 15 - adjustedY;
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

  return (
    <Canvas ref={canvasRef}>
      {rectangles.current.map((rectangle, key) => {
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
