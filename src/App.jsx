import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";
import Podcasts from "./Pages/Podcasts";
import Alumni from "./Pages/Alumni";
import Seeall from "./Components/Home/Seeall";
import Err from "./Components/Home/Err";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <NavMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Testimonial" element={<Seeall />} />
          <Route path="/Err" element={<Err />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
