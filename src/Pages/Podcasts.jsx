import React from "react";
import Main from "../Components/Podcasts/Main";
function Podcasts()
{
   React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
 return(
    <>
       <Main />   
    </>
 )
}
export default Podcasts;