import { useState } from "react";

function MultipleState() {
  const [name, setName] = useState("Saranya");
  const [age, setAge] = useState(21);

  return (
    <>
      <h1> Multiple States with useState</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("React Learner")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </>
  );
}

export default MultipleState;
