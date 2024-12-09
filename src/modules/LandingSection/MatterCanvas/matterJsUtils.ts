import {
  Bodies,
  Body,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js";
import { MutableRefObject, RefObject } from "react";

export const createBoundingBox = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>
) => {
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

  Composite.add(engineRef.current.world, [ground, ceiling, wallL, wallR]);
};

export const addMouseDragHandling = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>
) => {
  if (!canvasRef.current) return;

  var mouse = Mouse.create(canvasRef.current),
    mouseConstraint = MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(engineRef.current.world, mouseConstraint);
};

export const showCanvasShapes = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>
) => {
  if (!canvasRef.current) return;
  const cw = document.body.clientWidth;
  const ch = document.body.clientHeight;

  const render = Render.create({
    element: canvasRef.current,
    engine: engineRef.current,
    options: {
      width: cw,
      height: ch,
      wireframes: false,
      background: "transparent",
    },
  });

  const width = canvasRef.current?.clientWidth ?? 0;
  const height = canvasRef.current?.clientHeight ?? 0;

  const wallStyle = {
    render: {
      fillStyle: "#3918de8f",
    },
  };

  const ground = Bodies.rectangle(width / 2, height, width, 0, {
    isStatic: true,
    ...wallStyle,
  });
  const ceiling = Bodies.rectangle(width / 2, 0, width, 0, {
    isStatic: true,
    ...wallStyle,
  });
  const wallL = Bodies.rectangle(0, height, 0, height, {
    isStatic: true,
    ...wallStyle,
  });
  const wallR = Bodies.rectangle(width, height / 2, 0, height, {
    isStatic: true,
    ...wallStyle,
  });

  Composite.add(engineRef.current.world, [ground, ceiling, wallL, wallR]);

  Runner.run(engineRef.current);
  Render.run(render);
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
