import { useEffect, useState } from "react";
const useWindowSize = () => {
  const initialWindowSize = {
    width: undefined,
    height: undefined,
  };
  const [windowSize, setWindowSize] = useState(initialWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export { useWindowSize };
