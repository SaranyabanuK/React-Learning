import { useEffect, useState } from "react";

function UseEffectCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);

    // Cleanup when component unmounts
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>useEffect Cleanup</h1>
      <h2>Timer: {seconds} sec</h2>
    </div>
  );
}

export default UseEffectCleanup;
