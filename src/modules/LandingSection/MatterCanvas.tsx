import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Bodies,
  Body,
  Composite,
  Engine,
  Render,
  Runner,
  World,
} from "matter-js";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header";
import styled from "styled-components";
import Typography from "../../components/Typography";

// const engine = Engine.create();
// const runner = Runner.create();

// Runner.run(runner, engine);

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
  /* box-shadow: 2px 2px; */
  position: absolute;
`;

const Letter = styled(Typography)`
  font-weight: 500;
`;

const Scene = styled.div`
  width: 100%;
  height: 100%;
  /* z-index: 10; */
  position: absolute;
  background-color: rgba(100, 40, 200, 0.2);
`;

const text = "I'm Jacob,a multidisciplinary web";

const textArray = text.split("");

type Props = {
  containerRef: RefObject<HTMLDivElement>;
};

const MatterCanvas = ({ containerRef }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  // const rectangles = useRef<(Rectangle | undefined)[]>([]);
  const rectangles = useRef<Rectangle[]>([]);
  const engine = useRef(Engine.create());

  const [, setAnim] = useState(0);

  useEffect(function init() {
    const runner = Runner.create();

    Runner.run(runner, engine.current);

    const width = canvasRef.current?.clientWidth ?? 0;
    const height = canvasRef.current?.clientHeight ?? 0;

    const wallThickness = 50;

    const halfWall = wallThickness / 2;

    const ground = Bodies.rectangle(
      width / 2,
      height + halfWall,
      width,
      wallThickness,
      {
        isStatic: true,
      }
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      0 - halfWall,
      width,
      wallThickness,
      {
        isStatic: true,
      }
    );
    const wallL = Bodies.rectangle(
      0 - halfWall,
      height / 2,
      wallThickness,
      height,
      {
        isStatic: true,
      }
    );
    const wallR = Bodies.rectangle(
      width + halfWall,
      height / 2,
      wallThickness,
      height,
      {
        isStatic: true,
      }
    );

    Composite.add(engine.current.world, [ground, ceiling, wallL, wallR]);
  }, []);

  useEffect(() => {
    // const cw = document.body.clientWidth;
    // const ch = document.body.clientHeight;

    // const render = Render.create({
    //   element: scene.current,
    //   engine: engine.current,
    //   options: {
    //     width: cw,
    //     height: ch,
    //     wireframes: false,
    //     background: "transparent",
    //   },
    // });

    // const width = ref.current?.clientWidth ?? 0;
    // const height = ref.current?.clientHeight ?? 0;

    // const wallStyle = {
    //   render: {
    //     fillStyle: "#3918de8f",
    //   },
    // };

    // const ground = Bodies.rectangle(width / 2, height, width, 0, {
    //   isStatic: true,
    //   ...wallStyle,
    // });
    // const ceiling = Bodies.rectangle(width / 2, 0, width, 0, {
    //   isStatic: true,
    //   ...wallStyle,
    // });
    // const wallL = Bodies.rectangle(0, height, 0, height, {
    //   isStatic: true,
    //   ...wallStyle,
    // });
    // const wallR = Bodies.rectangle(width, height / 2, 0, height, {
    //   isStatic: true,
    //   ...wallStyle,
    // });

    // Composite.add(engine.current.world, [ground, ceiling, wallL, wallR]);

    // Runner.run(engine.current);
    // Render.run(render);

    const addLetterRectangles = () => {
      if (!canvasRef.current) return;
      const letterContainers = document.getElementsByClassName("letter");
      const containerY = canvasRef.current.getBoundingClientRect().top;
      const containerX = canvasRef.current.getBoundingClientRect().left;

      for (let i = 0; i < letterContainers.length; i++) {
        const letterContainer = letterContainers[i];

        // if (letterContainer.textContent?.trim() === "") {
        //   rectangles.current[i] = undefined;
        // }

        const width = letterContainer.getBoundingClientRect().width;
        const height = letterContainer.getBoundingClientRect().height;
        const x = letterContainer.getBoundingClientRect().x - containerX;
        const y = letterContainer.getBoundingClientRect().y - containerY;

        console.log({
          content: letterContainer.textContent,
          width,
          height,
          x,
          y,
        });

        rectangles.current[i] = {
          x,
          y,
          width,
          height,
          angleRad: 0,
        };

        const rectangle = Bodies.rectangle(
          x + width / 2,
          y + height / 2,
          width,
          height,
          {
            mass: 10,
            restitution: 0.9,
            friction: 0.005,
            // isStatic: true,
            render: {
              fillStyle: "rgba(190, 228, 16, 0.2);",
              strokeStyle: "#05ff01",
              lineWidth: 4,
            },
          }
        );

        // const testBody = Bodies.circle(x, y, 10, {
        //   mass: 10,
        //   restitution: 0.9,
        //   friction: 0.005,
        //   isStatic: true,
        //   render: {
        //     fillStyle: "rgba(190, 228, 16, 0.2);",
        //     strokeStyle: "#05ff01",
        //     lineWidth: 4,
        //   },
        // });

        // Composite.add(engine.current.world, testBody);
        Composite.add(engine.current.world, rectangle);
        // break;
      }
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
        console.log(rectangles.current[i]);

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
    <>
      <Canvas ref={canvasRef}>
        {rectangles.current.map((rectangle, key) => {
          // if (!rectangle || textArray[key] === " ") return null;
          if (!rectangle) return null;

          return (
            <Rectangle
              key={key}
              style={{
                top: rectangle.y - rectangle.height / 2,
                left: rectangle.x - rectangle.width / 2,
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
    </>
  );
};

export default MatterCanvas;
