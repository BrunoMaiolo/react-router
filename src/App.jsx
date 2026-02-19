import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDetail";

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
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
