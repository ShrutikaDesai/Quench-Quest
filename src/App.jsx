import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { Footer } from "antd/es/layout/layout";
import AppFooter from "./components/layout/Footer";
import About from "./components/pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
}

export default App;
