import { useState, useEffect } from "react";

export const useViewport = () => {
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width, height };
  }

  return { width: 0, height: 0 };
};
