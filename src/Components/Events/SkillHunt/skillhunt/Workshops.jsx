import React, { useEffect } from "react";

export default function Workshops({ checkBoxInp, workshops, disabled, all,info }) {
  return (
    <>
      <h3 className="step-title h3marginTop">Interested Workshops</h3>
      <div className="inpDivC">
        <div className="radiobgnDiv">
          <input
            onChange={!all ? checkBoxInp : () => {}}
            type="checkbox"
            id="cloud"
            name="cloud"
            value="cloud"
            checked={!all ? info.workshops.cloud : true}
            disabled={!all ? disabled.cloud : false}
          />
          <label htmlFor="cloud" className="labelTagInp">
            Cloud
          </label>
        </div>
        <div className="radiobgnDiv">
          <input
            onChange={!all ? checkBoxInp : () => {}}
            type="checkbox"
            id="trade"
            name="trade"
            value="trade"
            checked={!all ? info.workshops.trade : true}
            disabled={!all ? disabled.trade : false}
          />
          <label htmlFor="trade" className="labelTagInp">
            Trade
          </label>
        </div>
        <div className="radiobgnDiv">
          <input
            onChange={!all ? checkBoxInp : () => {}}
            type="checkbox"
            id="graphics"
            name="graphics"
            value="graphics"
            checked={!all ? info.workshops.graphics : true}
            disabled={!all ? disabled.graphics : false}
          />
          <label htmlFor="graphics" className="labelTagInp">
            Graphics
          </label>
        </div>
      </div>
    </>
  );
}
