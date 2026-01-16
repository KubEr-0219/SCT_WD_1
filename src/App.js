// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section className="section hero">Hero Section</section>
      <section className="section">About Section</section>
      <section className="section">Services Section</section>
      <section className="section">Contact Section</section>
    </>
  );
}

export default App;
