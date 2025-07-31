function InlineCSS() {
  const headingStyle = {
    color: "teal",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
  };

  const boxStyle = {
    backgroundColor: "#f5f5f5",
    border: "2px solid teal",
    padding: "10px",
    width: "250px",
    margin: "10px auto",
    borderRadius: "8px",
  };

  return (
    <div style={boxStyle}>
      <h2 style={headingStyle}> Inline CSS in React</h2>
      <p>Hi there, hope you see what I learned so far.</p>
    </div>
  );
}

export default InlineCSS;
