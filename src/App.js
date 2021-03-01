import React, { useState, useEffect } from "react";
/* import { commerce } from "./lib/commerce"; */
import Navbar from "./components/Products/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Commerce from "@chec/commerce.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const commerce = new Commerce(
  "pk_23844571890622a5868d5488cac895e4bef4034f887ec"
);

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { item } = await await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { item } = await commerce.cart.update(productId, { quantity });

    setCart(item);
  };

  const handleRemoveFromCart = async (productId) => {
    const { item } = await commerce.cart.remove(productId);

    setCart(item);
  };

  const handleEmptyCart = async () => {
    const { item } = await commerce.cart.empty();

    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
