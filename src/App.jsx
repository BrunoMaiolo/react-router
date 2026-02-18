import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">Chi siamo</Link> | {" "}
        <Link to="/products">Prodotti</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
