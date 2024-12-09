import {
  Bodies,
  Body,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Runner,
  World,
} from "matter-js";
import { MutableRefObject, RefObject } from "react";

export const createBoundingBox = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>
) => {
  if (!canvasRef.current) return;

  const runner = Runner.create();

  Runner.run(runner, engineRef.current);

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

  // -------SHOW SHAPES --------
  // const render = Render.create({
  //   element: canvasRef.current,
  //   engine: engineRef.current,
  //   options: {
  //     width,
  //     height,
  //     wireframes: false,
  //     background: "transparent",
  //   },
  // });

  // Render.run(render);

  Composite.add(engineRef.current.world, [ground, ceiling, wallL, wallR]);
};

export const addMouseDragHandling = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>
) => {
  if (!canvasRef.current) return;

  const mouse = Mouse.create(canvasRef.current);
  const mouseConstraint = MouseConstraint.create(engineRef.current, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  // This section ensures we can scroll through the canvas. On mobile, the touch
  // @ts-ignore
  mouse.element.removeEventListener("wheel", mouse.mousewheel);
  // @ts-ignore
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  // @ts-ignore
  mouse.element.removeEventListener("touchmove", mouse.mousemove);
  // @ts-ignore
  mouse.element.removeEventListener("touchstart", mouse.mousedown);
  // @ts-ignore
  mouse.element.removeEventListener("touchend", mouse.mouseup);

  World.add(engineRef.current.world, mouseConstraint);
};

export const handleExplosion = (
  event: MouseEvent,
  engineRef: MutableRefObject<Engine>
) => {
  const { layerX: mouseX, layerY: mouseY } = event;

  const minSpeed = 0;
  const maxSpeed = 10000;
  const speedFactor = 5;

  Composite.allBodies(engineRef.current.world).forEach((body) => {
    if (!body.isStatic) {
      // Calculate the directional vector pointing from the mouse to the body
      const directionX = body.position.x - mouseX;
      const directionY = body.position.y - mouseY;

      // Calculate the magnitude (distance) of the vector
      const distance = Math.sqrt(
        directionX * directionX + directionY * directionY
      );

      // Avoid division by zero (if the mouse and body are exactly at the same point)
      if (distance === 0) return;

      // Normalize the vector
      const normalizedDirectionX = directionX / distance;
      const normalizedDirectionY = directionY / distance;

      // Calculate the inverse speed based on distance, scaling it so that the closer the body is to the mouse, the faster it moves
      let speed = speedFactor / distance;

      // Cap the speed between minSpeed and maxSpeed
      speed = Math.max(minSpeed, Math.min(speed, maxSpeed));

      // const speed = minSpeed + distance * speedFactor;

      // Move the body by a certain speed in the opposite direction of the mouse
      const x = normalizedDirectionX * speed;
      const y = normalizedDirectionY * speed;

      // apply the force over a single update
      Body.applyForce(body, body.position, { x, y });
    }
  });
};
