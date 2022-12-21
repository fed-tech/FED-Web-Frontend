import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Nav from "./Components/NavBar/jsx/Nav.jsx";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel/jsx/Carousel.jsx"
import NavMobile from "./Components/NavBar/jsx/NavMobile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <NavMobile/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Carousel/>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
