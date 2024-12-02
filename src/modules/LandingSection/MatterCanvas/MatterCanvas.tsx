import React, { useEffect, useRef, useState } from "react";
import { Bodies, Composite, Engine, Render, Runner, Vertices } from "matter-js";
import styled from "styled-components";
import Typography from "../../../components/Typography";

import {
  createBoundingBox,
  getAdjustedPosition,
  pathDataToString,
  showCanvasShapes,
} from "./utils";
import opentype, { Font } from "opentype.js";

// For polygons with angles more than 180 degrees like L or E
// @ts-ignore
window.decomp = require("poly-decomp");

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  angleRad: number;
}

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: rgba(57, 150, 68, 0.5);
  overflow: hidden;
`;

const Rectangle = styled.div`
  background-color: rgba(217, 84, 12, 0.2);
  position: absolute;
`;

const Letter = styled(Typography)`
  font-weight: 500;
`;

const text = `I'mJacob,awebcreatorcraftinguserexperiencesthroughdesignanddevelopment`;

const textArray = text.split("");

const MatterCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const rectangles = useRef<Rectangle[]>([]);
  const engine = useRef(Engine.create());

  const [, setAnim] = useState(0);

  useEffect(() => {
    createBoundingBox(canvasRef, engine);
  }, []);

  useEffect(() => {
    showCanvasShapes(canvasRef, engine);

    engine.current.gravity.y = 0.2;

    const addLetterRectangles = async () => {
      if (!canvasRef.current) return;
      const letterContainers = document.getElementsByClassName("letter");

      const containerY = canvasRef.current.getBoundingClientRect().top;
      const containerX = canvasRef.current.getBoundingClientRect().left;

      let loadedFont: Font;

      await opentype.load("./fonts/Poppins-Medium.ttf", function (err, font) {
        if (err || !font) alert("Could not load font: " + err);
        else {
          loadedFont = font;

          // MATTERJS EXPLOSION
          // https://github.com/liabru/matter-js/blob/master/examples/timescale.js

          for (let i = 0; i < letterContainers.length; i++) {
            const letterContainer = letterContainers[i];

            // Don't add spaces
            if (
              letterContainer.textContent?.trim() === "" ||
              !letterContainer.textContent
            )
              continue;

            const width = letterContainer.getBoundingClientRect().width;
            const height = letterContainer.getBoundingClientRect().height;
            const x = letterContainer.getBoundingClientRect().x - containerX;
            const y = letterContainer.getBoundingClientRect().y - containerY;

            const letterPath = loadedFont.getPath(
              letterContainer.textContent,
              0,
              0,
              90
            );

            const dottedLetters = ["i", "j"];

            // Get vertices string from path data;
            const verticesString = pathDataToString(
              letterPath,
              dottedLetters.includes(letterContainer.textContent)
            );
            // Make makerjs Vertices array from vertices string
            const letterVertices = Vertices.fromPath(verticesString);

            // Some letters get rendered a little bit off their supposed centre, this will handle it
            const { x: adjustedX, y: adjustedY } = getAdjustedPosition(
              letterContainer.textContent
            );

            console.log({
              letter: letterContainer.textContent,
              letterPath,
              letterVertices,
              verticesString,
            });

            // Letters that throw errors are j,x,X,L,N
            // I am not using them in my heading so will ignore this for now
            try {
              const letter = Bodies.fromVertices(
                x + width / 2 + adjustedX,
                y + height / 2 + 15 + adjustedY,
                [letterVertices],
                {
                  mass: 1,
                  restitution: 0,
                  friction: 0.005,
                  // isStatic: true,
                  render: {
                    fillStyle: "rgba(190, 228, 16, 0.2);",
                    strokeStyle: "#05ff01",
                    lineWidth: 4,
                  },
                }
              );
              Composite.add(engine.current.world, letter);
            } catch (e) {
              console.log(e);
            }

            // rectangle.y - rectangle.height / 2 - 15,
            //   left: rectangle.x - rectangle.width / 2,

            rectangles.current.push({
              x: x,
              y: y,
              width,
              height,
              angleRad: 0,
            });
          }
        }
      });
    };
    // addLetterRectangles();
    setTimeout(addLetterRectangles, 500);

    // return () => {
    //   Render.stop(render);
    //   World.clear(engine.current.world, false);
    //   Engine.clear(engine.current);
    //   render.canvas.remove();
    //   //   render.canvas = null
    //   //   render.context = null
    //   render.textures = {};
    // };
  }, []);

  useEffect(function triggerAnimation() {
    let unsubscribe: number;

    function animate() {
      let i = 0;
      for (const rectangle of Composite.allBodies(engine.current.world)) {
        if (rectangle.isStatic) continue;
        // if (rectangle.isStatic || rectangles.current[i] === undefined) continue;
        // console.log(rectangles.current[i]);

        rectangles.current[i].x = rectangle.position.x;
        rectangles.current[i].y = rectangle.position.y;
        rectangles.current[i].angleRad = rectangle.angle;

        i += 1;
      }

      setAnim((x) => x + 1);

      unsubscribe = requestAnimationFrame(animate);
    }

    unsubscribe = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(unsubscribe);
    };
  }, []);

  return (
    <Canvas ref={canvasRef}>
      {rectangles.current.map((rectangle, key) => {
        if (!rectangle || textArray[key] === "") return null;

        const { x: adjustedX, y: adjustedY } = getAdjustedPosition(
          textArray[key]
        );

        return (
          <Rectangle
            key={key}
            style={{
              top: rectangle.y - rectangle.height / 2 - 15 - adjustedY,
              left: rectangle.x - rectangle.width / 2 - adjustedX,
              // top: rectangle.y,
              // left: rectangle.x,
              width: rectangle.width,
              height: rectangle.height,
              rotate: `${rectangle.angleRad}rad`,
            }}
          >
            <Letter variant="Header">{textArray[key]}</Letter>
          </Rectangle>
        );
      })}
    </Canvas>
  );
};

export default MatterCanvas;
