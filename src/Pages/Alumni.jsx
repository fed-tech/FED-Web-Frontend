import React from "react";
import OurAlumni from "../Components/Alumni/OurAlumni";
function Alumni() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OurAlumni />
    </>
  );
}
export default Alumni;
