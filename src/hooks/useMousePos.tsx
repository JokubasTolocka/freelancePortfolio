import { useEffect, useState } from "react";

const useMousePos = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const updateMousePos = (e: MouseEvent) =>
    setMousePos({ x: e.pageX, y: e.pageY });

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePos);

    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return mousePos;
};

export default useMousePos;
