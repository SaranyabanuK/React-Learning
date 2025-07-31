import { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState({ name: "Saranya", city: "Jaffna" });

  return (
    <>
      <h1>State with Object</h1>
      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>
      <button onClick={() => setUser({ ...user, city: "Kandy" })}>
        Move to Kandy
      </button>
    </>
  );
}

export default ObjectState;
