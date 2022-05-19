import { useEffect } from "react";
const useOnClickOutside = (eventHandler, referenceGiven) => {
  useEffect(() => {
    const listenerHandler = (eventGiven) => {
      if (
        referenceGiven.current &&
        !referenceGiven.current.contains(eventGiven.target)
      ) {
        eventHandler();
      }
    };
    document.addEventListener("touchstart", listenerHandler);
    document.addEventListener("mousedown", listenerHandler);

    return () => {
      document.removeEventListener("touchstart", listenerHandler);
      document.removeEventListener("mousedown", listenerHandler);
    };
  }, [eventHandler, referenceGiven]);
};

export { useOnClickOutside };
