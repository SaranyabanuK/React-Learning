import { useState } from "react";

function UseState() {
 
  const [count, setCount] = useState(1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>useState Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}> Reset</button>
    </div>
  );
}

export default UseState;
