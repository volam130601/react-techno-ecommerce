import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, SignUp } from "./pages";
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
          <Route path="/sign up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
