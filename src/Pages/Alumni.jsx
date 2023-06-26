import React, { useEffect } from "react";

// Components
import OurAlumni from "../Components/Alumni/OurAlumni";

function Alumni() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OurAlumni />
    </>
  );
}
export default Alumni;
