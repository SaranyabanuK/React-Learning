import { useState } from "react";

function TextAreaForm() {
  const [bio, setBio] = useState("Hello! I'm learning React");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bio: ${bio}`);
    console.log('Current State',bio);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>TextArea in React</h1>
      <form onSubmit={handleSubmit}>
        <label>About: 
        <textarea
        name="about"
          rows="4"
          cols="40"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea></label><br/><br/>
        <button type="submit">Save Bio</button>
      </form>
    </div>
  );
}

export default TextAreaForm;
