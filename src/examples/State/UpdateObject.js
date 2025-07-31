import { useState } from "react";

function UpdateObjectState() {
  const [profile, setProfile] = useState({ name: "Saranya", age: 21, city: "Jaffna" });

  const increaseAge = () => {
    setProfile(prev => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <>
      <h1> Updating Object in State</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.city}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
}

export default UpdateObjectState;
