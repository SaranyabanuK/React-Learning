import { useState } from "react";

function ArrayState() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  const addFruit = () => {
    setFruits(prev => [...prev, "Mango"]);
  };

  return (
    <>
      <h1>Updating Arrays in State</h1>
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </>
  );
}

export default ArrayState;
