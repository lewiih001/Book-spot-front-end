import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Collection from "./components/Collection";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Collection/>
      <Footer/>
    </div>
  );
}

export default App;
