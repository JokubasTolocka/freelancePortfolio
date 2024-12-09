import { Path } from "opentype.js";

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

export const getAdjustedPosition = (): {
  [key: string]: { x: number; y: number };
} => {
  const positions: { [key: string]: { x: number; y: number } } = {
    m: { x: 0, y: 0 },
    n: { x: 0, y: 0 },
    r: { x: 0, y: 0 },
    h: { x: 0, y: 0 },
    l: { x: 0, y: 0 },
    I: { x: 0, y: 0 },
    W: { x: 0, y: 0 },
    V: { x: 0, y: 0 },
    Y: { x: 0, y: 0 },
    S: { x: 0, y: 0 },
    G: { x: 0, y: 0 },
    Z: { x: 0, y: 0 },
    C: { x: 0, y: 2 },
    D: { x: 0, y: 2 },
    M: { x: 0, y: 2 },
    O: { x: 0, y: 2 },
    K: { x: 0, y: 2 },
    t: { x: 0, y: 5 },
    B: { x: 0, y: 5 },
    E: { x: 0, y: 5 },
    e: { x: -2, y: 18 },
    u: { x: 2, y: 18 },
    T: { x: 0, y: -15 },
    f: { x: 0, y: -15 },
    "'": { x: 0, y: -28 },
    ".": { x: 0, y: 30 },
    ",": { x: 0, y: 30 },
    "!": { x: 0, y: -10 },
    "?": { x: 0, y: -10 },
    g: { x: 0, y: 35 },
    k: { x: 0, y: 8 },
    c: { x: 0, y: 8 },
    Q: { x: 10, y: 23 },
    d: { x: 8, y: 6 },
    q: { x: 8, y: 15 },
    a: { x: 5, y: 10 },
    H: { x: 2, y: 0 },
    y: { x: -2, y: 20 },
    F: { x: -2, y: 0 },
    J: { x: -2, y: 18 },
    P: { x: -5, y: 2 },
    b: { x: -10, y: 8 },
    p: { x: -10, y: 18 },
  };

  // Return a Proxy to handle missing keys with a default value of { x: 0, y: 0 }
  return new Proxy(positions, {
    get(target, prop: string) {
      // Return the corresponding value if the key exists, otherwise return the default value
      return prop in target ? target[prop] : { x: 0, y: 10 };
    },
  });
};
