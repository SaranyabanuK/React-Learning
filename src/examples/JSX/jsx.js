function JSX() {
  const name = "Saranya";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is my first JSX example.</p>
      <p>Current Year: {currentYear}</p>
    </div>
  );
}

export default JSX;
