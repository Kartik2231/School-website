import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
import VideoTour from "./components/Videotour";
// import About from "./pages/About";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <VideoTour />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        {/* <Route path="About" element={<About />}>About</Route> */}
      </Routes>
      <Footer />
    </>
  )
}
export default App;