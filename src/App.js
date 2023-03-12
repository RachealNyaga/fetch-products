import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import { products } from "./data";
import { ProductsProvider } from "./context"
import Cart from "./components/Cart"
import Footer from "./components/Footer";


function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  console.log(categories)
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <ProductsProvider>
        <Routes>
        <Route
            path="/"
            element={<Home />}
          />
          <Route path={"/products"} element={<Products />}>
            <Route
              index
              element={<ProductsDisplay category={"all"} />}
            />
            {categories.length > 0 &&
              categories.map((c) => {
                return (
                  <Route
                    path={`${c}`}
                    element={
                      <ProductsDisplay category={`${c}`} />
                    }
                  />
                );
              })}
          </Route>
          <Route
            path="/products/:id"
            element={<OneProduct />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
        </ProductsProvider>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
