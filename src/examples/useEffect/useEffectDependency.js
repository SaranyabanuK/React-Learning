import { useEffect, useState } from "react";

function UseEffectDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `Count: ${count}`;
  }, [count]); // Runs every time 'count' changes

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>useEffect with Dependencies</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectDependency;
