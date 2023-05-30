import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Helmet
import { Helmet } from "react-helmet";

// Layout
import Layout from "./Pages/Layout";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const Team = React.lazy(() => import("./Pages/Team"));
const Error = React.lazy(() => import("./Pages/Error"));
const Alumni = React.lazy(() => import("./Pages/Alumni"));
const Events = React.lazy(() => import("./Pages/Events"));
const Podcasts = React.lazy(() => import("./Pages/Podcasts"));
const Testimonial = React.lazy(() => import("./Pages/Testimonial"));

// Loading
import Loading from "./Pages/Loading";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";

// Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Nav />
          <NavMobile />
          <Routes>
            <Helmet>
              <title>Federation of Entrepreneurship Development</title>
              <meta
                name="description"
                content="Our Homepage is the main webpage of a website that serves as the primary entry point for visitors. Its purpose is to provide an overview of what our society stands for, what we believe in and what others think about FED."
              />
              <meta
                property="og:title"
                content="Federation of Entrepreneurship Development"
              />
              <meta property="og:url" content="https://fedkiit.com" />
              <meta
                property="og:description"
                content="Our Homepage is the main webpage of a website that serves as the primary entry point for visitors. Its purpose is to provide an overview of what our society stands for, what we believe in and what others think about FED. "
              />
              <meta
                property="og:image"
                itemprop="image"
                content="https://ik.imagekit.io/vgd1bllwv/fed.png?updatedAt=1685457447183"
              />
              <meta property="og:type" content="website" />

              <meta
                property="twitter:card"
                content="summary_large_image"
              ></meta>
              <meta
                property="twitter:url"
                content="https://twitter.com/services_enr"
              ></meta>
              <meta
                property="twitter:title"
                content="Federation of Entrepreneurship Development"
              ></meta>
            </Helmet>

            <Route path="/" element={<Home />} />
            <Route
              path="/Team"
              element={
                <Suspense fallback={<Loading />}>
                  <Team />
                </Suspense>
              }
            />
            <Route
              path="/Event"
              element={
                <Suspense fallback={<Loading />}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="/Alumni"
              element={
                <Suspense fallback={<Loading />}>
                  <Alumni />
                </Suspense>
              }
            />
            <Route
              path="/Podcasts"
              element={
                <Suspense fallback={<Loading />}>
                  <Podcasts />
                </Suspense>
              }
            />
            <Route
              path="/Testimonial"
              element={
                <Suspense fallback={<Loading />}>
                  <Testimonial />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Error />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
