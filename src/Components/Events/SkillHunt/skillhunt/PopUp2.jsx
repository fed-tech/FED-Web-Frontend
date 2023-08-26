import React, { useState, useEffect } from "react";
import QR from "./QR";

function PopUp2({ dataInp, info }) {
  const [QrImg, setQrImg] = useState(0);

  useEffect(() => {
    const amtQR = Object.values(info.workshops).filter((val) => {
      return val === true;
    }).length;

    setQrImg(amtQR);
  }, []);
  return (
    <>
      <div className="cardeve" id="div1_2" data-step-1>
        <h3 className="step-title">
          Note : If you pay any amount different than amount dedicated to your
          preferred workshop then the allotment or cancellation of allotment of
          learning workshops will be at the sole discretion of FED.
        </h3>
        {QrImg === 1 ? (
          <QR qrLink="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/64c513708dd599c8a2879125_99.png" />
        ) : (
          <QR qrLink="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/64c513707f29e6de7c4c6bb2_149.png" />
        )}
        <h3 className="step-title h3marginTop">
          Last 4 digits of the Transaction ID
        </h3>
        <div className="popTDiv">
          <input
            onChange={dataInp}
            type="number"
            name="transaction"
            className="inpTagPry"
            id="transaction"
            placeholder="Transaction ID"
            required
            value={info.transaction}
          />
        </div>
        <p id="toogle-talkshow" className="toogle"></p>
      </div>
    </>
  );
}

export default PopUp2;
