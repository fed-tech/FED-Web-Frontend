import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Team from "./Pages/Team";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
