function ConditionalDemo() {
  const isLoggedIn = false; 

  return (
    <div>
      <h1> Conditional Rendering</h1>
      {isLoggedIn ? (
        <h3> Welcome back, Saranya!</h3>
      ) : (
        <h3> Please log in to continue.</h3>
      )}
    </div>
  );
}

export default ConditionalDemo;
