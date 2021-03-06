import { useState, useEffect } from "react";
import _ from "utils";

function calcWindowSize() {
  const isClient = typeof window === "object";

  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  };
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(calcWindowSize());

  useEffect(() => {
    const handleResize = _.compose(setWindowSize, calcWindowSize);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
