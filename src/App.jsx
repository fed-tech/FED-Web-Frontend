import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Layout
import Layout from "./Pages/Layout";

// Pages
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Alumni from "./Pages/Alumni";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";
import Seeall from "./Components/Home/Seeall";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
// import MyProfile from "./Components/Profile/MyProfile";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";

// Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <NavMobile />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Event" element={<Events />} />
            <Route path="/Alumni" element={<Alumni />} />
            <Route path="/Podcasts" element={<Podcasts />} />
            <Route path="/Testimonial" element={<Seeall />} />
            <Route
              path="/Login"
              element={
                isLoggedIn ? (
                  <Profile setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route
              path="/Signup"
              element={
                isLoggedIn ? (
                  <Profile setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Signup />
                )
              }
            />
            <Route
              path="/MyProfile"
              element={
                isLoggedIn ? (
                  <Profile setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Signup />
                )
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
