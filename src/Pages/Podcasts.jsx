import React from "react";
import Main from "../Components/Podcasts/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Youtube from "../Components/Podcasts/Youtube";
function Podcasts()
{
 return(
    <>
    <BrowserRouter>
        <Main />
        <Routes>
        <Route path="/Youtube" element={<Youtube/>} />
        </Routes>
        </BrowserRouter>
    </>
 )
}
export default Podcasts;