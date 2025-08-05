import { useState } from "react";

function SimplifiedHandlerForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}`);
  console.log('Current State',formData);
};

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Simplified Handler for Multiple Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label> Your name: 
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        /></label><br/><br/>
         <label> Your Mail: 
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        /></label><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimplifiedHandlerForm;
