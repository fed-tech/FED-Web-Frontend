import React, { useEffect } from "react";
import Main1 from "../Components/Omega/page1/Main";
import Main2 from "../Components/Omega/page2/Main";
import { useState } from "react";

export default function Omega() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shift, setShift] = useState(false);

  return (
    <div>
      {!shift && <Main1 setShift={setShift} />}
      {shift && <Main2 />}
    </div>
  );
}
