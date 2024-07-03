import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hero from "./components/HeroSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Hero/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
