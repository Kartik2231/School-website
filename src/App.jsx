import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Academic from "./pages/Academic";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/Academic" element={<Academic />}>Academic</Route>
        {/* <Route path="About" element={<About />}>About</Route> */}
      </Routes>
      <Footer />
    </>
  )
}
export default App;