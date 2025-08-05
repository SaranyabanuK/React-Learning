import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Submitted Name: ${name}`);
    console.log('Current State',name);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Simple Form</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input
         name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
