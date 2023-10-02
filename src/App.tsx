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
} from "./pages";
import { AddressBook, MyProfile } from "./pages/Account";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/my-profile" element={<MyProfile />} />
          <Route path="/account/address-book" element={<AddressBook />} />
          <Route path="/error-404" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
