import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Authentification/SignUp";
import Header from "./header/Header";
import About from "./components/Authentification/About";
import Footer from "./components/footer/Footer";

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
      </Routes>
    </Router>
  );
}

export default App;
