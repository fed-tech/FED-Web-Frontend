import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/OurTeam" element={<Team />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
