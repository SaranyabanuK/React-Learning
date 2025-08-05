import { useEffect } from "react";

function UseEffectBasic() {
  useEffect(() => {
    console.log("Component Mounted ");
  }, []); // Empty dependency → runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Basic useEffect</h1>
      <p>Open console → "Component Mounted" appears once.</p>
    </div>
  );
}

export default UseEffectBasic;
