import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Team from "./Pages/Team";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";
import Alumni from "./Pages/Alumni";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <NavMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Event" element={<Events />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="*" element={<Error />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
