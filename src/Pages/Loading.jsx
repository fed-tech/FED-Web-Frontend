import React from "react";

export default function Loading() {
  return (
    <div className="centerLoader">
      <div className="arc" />
      <h1 className="loadingSpanH1">
        <span className="loadingSpan">Loading</span>
      </h1>
    </div>
  );
}
