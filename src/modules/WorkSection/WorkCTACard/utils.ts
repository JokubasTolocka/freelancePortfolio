import { Bodies, Composite, Engine } from "matter-js";
import { theme } from "../../../utils/theme";
import { MutableRefObject, RefObject } from "react";

export const TEXT = [
  "UI/UX",
  "Branding",
  "Mobile",
  "User Experience",
  "Responsive",
  "Design",
  "Murals",
  "Prototypes",
  "Coding",
  "Development",
  "SEO",
  "Performance",
  "Desktop",
  "Accessibility",
  "UI/UX",
  "Mobile",
  "Design",
  "Coding",
  "SEO",
];

const COLORS = [
  {
    regular: theme.colors.complimentary.green,
    light: theme.colors.complimentary.lightGreen,
  },
  {
    regular: theme.colors.complimentary.yellow,
    light: theme.colors.complimentary.lightYellow,
  },
  {
    regular: theme.colors.complimentary.purple,
    light: theme.colors.complimentary.lightPurple,
  },
];

const getRandomNumberInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export interface TextBlock {
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angleRad: number;
  tranformOrigin: { x: number; y: number };
  backgroundColor: string;
  color: string;
}

export const addTextBlocks = (
  canvasRef: RefObject<HTMLDivElement>,
  engineRef: MutableRefObject<Engine>,
  blocksRef: MutableRefObject<TextBlock[]>
) => {
  const SIDE_PADDING = 16;
  const containerWidth = canvasRef.current?.clientWidth ?? 0;

  TEXT.map((title) => {
    const titleLetterCount = title.split("").length;

    const x = getRandomNumberInRange(0, containerWidth);
    const y = -300;
    const angleRad = getRandomNumberInRange(-2, 2);

    const width = titleLetterCount * 20 + SIDE_PADDING * 2,
      height = 88;

    const BODY_MASS = 0.3;

    const blockBody = Bodies.rectangle(x, y, width, height, {
      restitution: 0.4,
      // friction: 0.005,
      // isStatic: true,
      // mass: BODY_MASS,
      // inverseMass: 1 / BODY_MASS,
      chamfer: { radius: height / 2 },
      render: {
        fillStyle: "rgba(190, 228, 16, 0.2);",
        strokeStyle: "#05ff01",
        lineWidth: 1,
      },
    });

    Composite.add(engineRef.current.world, blockBody);

    const randomIndex = Math.floor(Math.random() * 3) + 1;

    blocksRef.current.push({
      title,
      x,
      y,
      width,
      height,
      angleRad,
      // Get centre of mass for transform origin
      tranformOrigin: {
        x: width / 2,
        y: height / 2,
      },
      backgroundColor: COLORS[randomIndex - 1].light,
      color: COLORS[randomIndex - 1].regular,
    });
  });
};
