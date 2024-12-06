import { Bodies, Composite, Engine, Render, Runner } from "matter-js";
import { Path } from "opentype.js";
import { MutableRefObject, RefObject } from "react";

export const createBoundingBox = (
  canvasRef: RefObject<HTMLDivElement>,
  engine: MutableRefObject<Engine>
) => {
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
};

export const pathDataToString = (
  letterPath: Path,
  hasMultiplePaths = false
) => {
  let result = [],
    shouldContinuePastClosepath = hasMultiplePaths;

  const pathCommands = letterPath.commands;

  // Iterate through the letterPath commands array
  for (let i = 0; i < pathCommands.length; i++) {
    const vertex = pathCommands[i];

    // If the command is 'closepath', stop the loop
    if (vertex.type === "Z") {
      if (shouldContinuePastClosepath) {
        shouldContinuePastClosepath = false;
        result = [];
        continue;
      } else {
        break;
      }
    }

    // Extract the x and y coordinates and add them to the result array
    if (vertex.x !== undefined && vertex.y !== undefined) {
      if (vertex.type === "Q") {
        const roundedX = Math.round(vertex.x1 * 100) / 100;
        const roundedY = Math.round(vertex.y1 * 100) / 100;

        result.push(`${roundedX} ${roundedY}`);
      } else {
        const roundedX = Math.round(vertex.x * 100) / 100;
        const roundedY = Math.round(vertex.y * 100) / 100;

        result.push(`${roundedX} ${roundedY}`);
      }
    }
  }

  // Join the array into a string with spaces separating the coordinates
  return result.join(" ");
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

export const getAdjustedPosition = (): {
  [key: string]: { x: number; y: number };
} => {
  const positions: { [key: string]: { x: number; y: number } } = {
    m: { x: 0, y: -10 },
    n: { x: 0, y: -10 },
    r: { x: 0, y: -10 },
    h: { x: 0, y: -10 },
    l: { x: 0, y: -10 },
    I: { x: 0, y: -10 },
    W: { x: 0, y: -10 },
    V: { x: 0, y: -10 },
    Y: { x: 0, y: -10 },
    S: { x: 0, y: -10 },
    G: { x: 0, y: -10 },
    Z: { x: 0, y: -10 },
    C: { x: 0, y: -8 },
    D: { x: 0, y: -8 },
    M: { x: 0, y: -8 },
    O: { x: 0, y: -8 },
    K: { x: 0, y: -8 },
    t: { x: 0, y: -5 },
    B: { x: 0, y: -5 },
    E: { x: 0, y: -5 },
    e: { x: 0, y: 8 },
    u: { x: 0, y: 8 },
    T: { x: 0, y: -25 },
    f: { x: 0, y: -25 },
    "'": { x: 0, y: -38 },
    ".": { x: 0, y: 20 },
    ",": { x: 0, y: 20 },
    "!": { x: 0, y: -20 },
    "?": { x: 0, y: -20 },
    g: { x: 0, y: 25 },
    k: { x: 0, y: -2 },
    c: { x: 0, y: -2 },
    Q: { x: 10, y: 13 },
    d: { x: 8, y: -4 },
    q: { x: 8, y: 5 },
    a: { x: 5, y: 0 },
    H: { x: 2, y: -10 },
    y: { x: -2, y: 10 },
    F: { x: -2, y: -10 },
    J: { x: -2, y: 8 },
    P: { x: -5, y: -8 },
    b: { x: -10, y: -2 },
    p: { x: -10, y: 8 },
  };

  // Return a Proxy to handle missing keys with a default value of { x: 0, y: 0 }
  return new Proxy(positions, {
    get(target, prop: string) {
      // Return the corresponding value if the key exists, otherwise return the default value
      return prop in target ? target[prop] : { x: 0, y: 0 };
    },
  });
};
