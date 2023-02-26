import React, { useEffect } from "react";

// Components
import OurAlumni from "../Components/Alumni/OurAlumni";

function Alumni() {
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
