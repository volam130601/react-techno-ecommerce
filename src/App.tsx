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
} from "./pages";

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
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
