import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function About() {
  return <h2>About Page</h2>;
}

export default function RouterE() {
  return (
    <Router>
      <nav>
        <Link to="/Home">Home</Link> | {""}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}
