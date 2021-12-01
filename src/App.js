import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Authentification/SignUp";
import Header from "./header/Header";
import About from "./components/Authentification/About";
import Footer from "./components/footer/Footer";
import Delivery from "./components/Authentification/Delivery";
import Contact from "./components/Authentification/Contact";

function App() {
  return (
    // <div>
    //   <Header />
    // </div>
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div>
              <Header />
              <Footer />
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div>
              <Header />
              <SignUp />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/delivery"
          element={
            <div>
              <Header />
              <Delivery />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
