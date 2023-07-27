import React from "react";

export default function Workshops({
  checkBoxInp,
  workshops,
  disabled,
  all,
  setWorkshops,
}) {
  if (all) {
    setWorkshops({
      cloud: true,
      trade: true,
      graphics: true,
    });
  }
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
            checked={!all ? workshops.cloud : true}
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
            checked={!all ? workshops.trade : true}
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
            checked={!all ? workshops.graphics : true}
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
