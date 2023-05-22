import React, { useEffect } from "react";

// Components
import OurAlumni from "../Components/Alumni/OurAlumni";
import { Animatedpage } from "../Components/Animatedpage";

function Alumni() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Animatedpage>
      <>
        <OurAlumni />
      </>
    </Animatedpage>
  );
}
export default Alumni;
