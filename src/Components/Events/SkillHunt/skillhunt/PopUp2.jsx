import React, { useState } from "react";
import QR from "./QR";

function PopUp2({ dataInp, info }) {
  const [inOtherSociety, setInOtherSociety] = useState(false);
  const yes = () => {
    setInOtherSociety(true);
  };
  const no = () => {
    setInOtherSociety(false);
  };
  return (
    <>
      <div className="cardeve" id="div1_2" data-step-1>
        <h3 className="step-title">
          Note : If you pay any amount different than amount dedicated to your
          preferred workshop then the allotment or cancellation of allotment of
          learning workshops will be at the sole discretion of FED.
        </h3>
        {info.packages === "three-workshop" && (
          <QR qrLink="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/64c2cfe0bb7f8dae8d14746d_Picture2.png" />
        )}
        {info.packages === "two-workshop" && (
          <QR qrLink="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/64c2ceaf78167dd32ed57513_Picture1.png" />
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
