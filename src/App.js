import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Products/Navbar/Navbar";
import Products from "./components/Products/Products";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(product);

  return (
    <>
      <Navbar />
      <Products />
    </>
  );
};

export default App;
