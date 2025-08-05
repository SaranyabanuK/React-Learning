import { useState } from "react";

function InitialValuesForm() {
  const [formData, setFormData] = useState({ name: "Saranya", city: "Jaffna" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Name: ${formData.name}, City: ${formData.city}`);
    console.log('Current State',formData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1> Initial Form Values</h1>
      <form onSubmit={handleSubmit}>
        <label>Your Name:<input name="name" value={formData.name} onChange={handleChange} /></label><br/><br/>
        <label>Your City:
            <input name="city" value={formData.city} onChange={handleChange} />
            <select name="city" onChange={handleChange} value={formData.city}>
                   <option value="Kandy">Kandy</option>
                   <option value="Jaffna">Jaffna</option>
                   <option value="Colombo">Colombo</option>
                   <option value="Nuwara Eliya">Nuwara Eliya</option>
                </select></label><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InitialValuesForm;
