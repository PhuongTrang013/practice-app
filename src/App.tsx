import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Pages/Products/ProductList";
import { MOCK_PRODUCTS } from "./Data/MockProducts";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-lg">
        <ProductList products={MOCK_PRODUCTS} />
      </div>
      {/* <Outlet /> */}
    </>
  );
}

export default App;
