import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";

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
import TCO from "./Pages/TCO";
import DashMobile from "./Components/DashMobile";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import AddMember from "./Pages/AddMember";
import Member from "./Pages/Member";
import UpdateProfile from "./Pages/UpdateProfile"

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";

// state
import AuthContext from "./store/auth-context";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import CreateProfile from "./Pages/CreateProfile";

function App() {
  const authCtx = useContext(AuthContext);

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
                authCtx.isLoggedIn ? (
                  <Profile setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route
              path="/Signup"
              element={
                authCtx.isLoggedIn ? (
                  <Profile setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Signup />
                )
              }
            />
            <Route
              path="/MyProfile"
              element={authCtx.isLoggedIn ? <Profile /> : <Signup />}
            />
            <Route
              path="/MyProfile/member"
              element={authCtx.isLoggedIn ? <TCO /> : <Signup/>}
            />
            {/* <Route
              path="/MyProfile/member"
              element={authCtx.isLoggedIn ? <TCO /> : <Signup />}
            /> */}
            <Route
              path="/admin/Member"
              element={authCtx.user.access === 0 ? <Member /> : <Error />}
            />
            <Route
              path="/admin/Member/AddMember"
              element={authCtx.user.access === 0 ? <AddMember /> : <Error />}
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />

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
