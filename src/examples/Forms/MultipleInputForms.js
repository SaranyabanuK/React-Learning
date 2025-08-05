import { useState } from "react";

function MultipleInputsForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Email: ${email}, Password: ${password}`);
  console.log('Current State',email, password);
};

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1> Multiple Inputs Form</h1>
      <form onSubmit={handleSubmit}>
       <label>Enter you Email
        <input
        name="mail"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /></label><br/><br/>
        <label>Enter your password
        <input
        name="PW"
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        /></label><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputsForm;
