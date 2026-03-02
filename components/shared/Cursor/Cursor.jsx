"use client";

import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={40}
      color="79, 70, 229"
      outerAlpha={0.25}
      innerScale={1}
      outerScale={2.5}
      outerStyle={{
        border: "2px solid rgba(79, 70, 229, 0.8)",
        
      }}
  
      clickables={[
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "[role='button']",
        ".cursor-pointer"
      ]}
    />
  );
}
