import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HeroProvider } from "./context/HeroContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
    <HeroProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
        </HeroProvider>
    </>
  );
};

export default App;
