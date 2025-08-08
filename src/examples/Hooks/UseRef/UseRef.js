import React, { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input box
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
