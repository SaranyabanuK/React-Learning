import React from "react";
import { useWindowWidth } from "./useWindowWidth";

export default function CustomHook() {
  const width = useWindowWidth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Hook Example</h2>
      <p>Window width: {width}px</p>
    </div>
  );
}
