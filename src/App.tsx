import { Footer, Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Contact,
  Home,
  SignUp,
  Login,
  Wishlist,
  Error404,
  Product,
} from "./pages";
import { AddressBook, MyProfile } from "./pages/Account";
import { useState, useEffect } from "react";
import { CartEntity } from "./entity";

function App() {
  const [cartItems, setCartItems] = useState<CartEntity[]>([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem: CartEntity) => {
    const isProductExist = cartItems.find((item) => item.id === cartItem.id);
    if (isProductExist) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...cartItem, quantity: 1 },
      ]);
    }
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/my-profile" element={<MyProfile />} />
          <Route path="/account/address-book" element={<AddressBook />} />
          <Route path="/error-404" element={<Error404 />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
