import React, { useEffect } from "react";
import { Animatedpage } from "../Components/Animatedpage";

// Components
import Main from "../Components/Podcasts/Main";

function Podcasts() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Animatedpage>
      <>
        <Main />
      </>
    </Animatedpage>
  );
}
export default Podcasts;
