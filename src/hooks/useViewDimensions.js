import { useEffect, useState } from "react";
const useViewDimensions = () => {
  const initialViewDimensions = {
    width: undefined,
    height: undefined,
  };
  const [viewDimensions, setViewDimensions] = useState(initialViewDimensions);

  useEffect(() => {
    const handleResize = () => {
      setViewDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return viewDimensions;
};

export { useViewDimensions };
