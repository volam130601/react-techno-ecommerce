import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, SignUp } from "./pages";
import Login from "./pages/SignUp/Login";
function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
