import { Bodies, Composite, Engine, Vertices } from "matter-js";
import opentype, { Font } from "opentype.js";
import { MutableRefObject, RefObject } from "react";
import { ADJUSTED_LETTER_POSITIONS, pathDataToString } from "./utils";
import { Rectangle } from "./MatterCanvas";

const DOTTER_LETTERS_ARR = ["i", "j"];

export const addLetterShapes = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>,
  rectanglesRef: MutableRefObject<Rectangle[]>
) => {
  if (!canvasRef.current) return;

  const letterContainers = document.getElementsByClassName("letter");

  const { top: containerY, left: containerX } =
    canvasRef.current.getBoundingClientRect();

  opentype.load("./fonts/Poppins-Medium.ttf", (err, loadedFont) => {
    if (err || !loadedFont) console.log("Could not load font: " + err);
    else
      Array.from(letterContainers).forEach((letterContainer: Element) => {
        const { textContent } = letterContainer;

        // Don't add spaces
        if (!textContent?.trim()) return;

        const boundingClientRect = letterContainer.getBoundingClientRect();

        const { width, height, x: boundX, y: boundY } = boundingClientRect;
        const x = boundX - containerX;
        const y = boundY - containerY;

        const letterPath = loadedFont.getPath(textContent, 0, 0, 90);

        // Get vertices string from path data;
        const stringOfPoints = pathDataToString(
          letterPath,
          DOTTER_LETTERS_ARR.includes(textContent)
        );
        // Make makerjs Vertices array from vertices string
        // @ts-ignore
        const letterVertices = Vertices.fromPath(stringOfPoints);

        // Some letters get rendered a bit off their supposed centre, this will handle it
        const { x: adjustedX, y: adjustedY } =
          ADJUSTED_LETTER_POSITIONS[textContent];

        const BODY_MASS = 0.3;

        // Letters that throw errors are j,x,X,L,N
        // I am not using them in my heading so will ignore this for now
        try {
          const letterBody = Bodies.fromVertices(
            x + width / 2 + adjustedX,
            y + height / 2 + adjustedY,
            [letterVertices],
            {
              mass: BODY_MASS,
              inverseMass: 1 / BODY_MASS,
              restitution: 0.4,
              friction: 0.005,
              // isStatic: true,
              render: {
                fillStyle: "rgba(190, 228, 16, 0.2);",
                strokeStyle: "#05ff01",
                lineWidth: 1,
              },
            }
          );

          Composite.add(engineRef.current.world, letterBody);

          rectanglesRef.current.push({
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
  });
};
