import React, { useEffect } from "react";
import Main from "../Components/Omega/page1/Main";

export default function Omega() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}
