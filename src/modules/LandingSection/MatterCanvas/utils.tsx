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

export const getAdjustedPosition = (
  symbol: string
): { x: number; y: number } => {
  switch (symbol) {
    case "m":
    case "n":
    case "r":
    case "h":
    case "l":
    case "I":
    case "W":
    case "V":
    case "Y":
    case "S":
    case "G":
    case "Z":
      return { x: 0, y: -10 };
    case "C":
    case "D":
    case "M":
    case "O":
    case "K":
      return { x: 0, y: -8 };
    case "t":
    case "B":
    case "E":
      return { x: 0, y: -5 };
    case "e":
    case "u":
      return { x: 0, y: 8 };
    case "T":
    case "f":
      return { x: 0, y: -25 };
    case "'":
      return { x: 0, y: -38 };
    case ".":
    case ",":
      return { x: 0, y: 20 };
    case "!":
    case "?":
      return { x: 0, y: -20 };
    case "g":
      return { x: 0, y: 25 };
    case "k":
    case "c":
      return { x: 0, y: -2 };
    case "Q":
      return { x: 10, y: 13 };
    case "d":
      return { x: 8, y: -4 };
    case "q":
      return { x: 8, y: 5 };
    case "a":
      return { x: 5, y: 0 };
    case "H":
      return { x: 2, y: -10 };
    case "y":
      return { x: -2, y: 10 };
    case "F":
      return { x: -2, y: -10 };
    case "J":
      return { x: -2, y: 8 };
    case "P":
      return { x: -5, y: -8 };
    case "b":
      return { x: -10, y: -2 };
    case "p":
      return { x: -10, y: 8 };
    default:
      return { x: 0, y: 0 };
  }
};
