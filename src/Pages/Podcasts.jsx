import React, { useEffect } from "react";

// Components
import Main from "../Components/Podcasts/Main";

function Podcasts() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
export default Podcasts;
