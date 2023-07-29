import React from "react";

export default function QR({ qrLink }) {
  return (
    <div className="qr">
      <img src={qrLink} alt="" />
    </div>
  );
}
