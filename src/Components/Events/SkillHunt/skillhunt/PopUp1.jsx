import React, { useEffect, useState } from "react";
import Workshops from "./Workshops";

function PopUp1({ dataInp, info, setInterestedWorkshop, checked, setChecked }) {
  const [workshops, setWorkshops] = useState({
    cloud: false,
    trade: false,
    graphics: false,
  });
  const [disabled, setDisabled] = useState({
    cloud: false,
    trade: false,
    graphics: false,
  });
  // const [checked, setChecked] = useState(0);

  const checkBoxInp = (e) => {
    const { name, value } = e.target;
    if (workshops[name]) {
      setWorkshops({ ...workshops, [name]: false });
      setChecked(checked - 1);
    } else {
      setWorkshops({ ...workshops, [name]: true });
      setChecked(checked + 1);
    }
  };

  useEffect(() => {
    if (checked == 2) {
      setDisabled({
        cloud: !workshops.cloud,
        trade: !workshops.trade,
        graphics: !workshops.graphics,
      });
    } else {
      setDisabled({
        cloud: false,
        trade: false,
        graphics: false,
      });
    }
  }, [checked]);

  useEffect(() => {
    setInterestedWorkshop(workshops);
  }, [workshops]);

  return (
    <>
      <div className="cardeve" id="div1" data-step>
        <h3 className="step-title">Basic Details</h3>
        <div className="form-group">
          <h3 className="step-title h3marginTop">Age</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="number"
              name="age"
              className="inpTagPry"
              id="age"
              placeholder="Age"
              required
              value={info.age}
            />
          </div>
          <h3 className="step-title h3marginTop">Preferred Package</h3>
          <div className="inpDivC">
            <div className="radiobgnDiv">
              <input
                onChange={dataInp}
                type="radio"
                id="twoSessions"
                name="packages"
                value="two-workshop"
                checked={info.packages === "two-workshop"}
              />
              <label htmlFor="twoSessions" className="labelTagInp">
                Two Workshop and Speaker Session
              </label>
            </div>
            <div className="radiobgnDiv">
              <input
                onChange={dataInp}
                type="radio"
                id="threeSessions"
                name="packages"
                value="three-workshop"
                checked={info.packages === "three-workshop"}
              />
              <label htmlFor="threeSessions" className="labelTagInp">
                Three Workshop and Speaker Session
              </label>
            </div>
          </div>
          {info.packages === "two-workshop" && (
            <Workshops
              checkBoxInp={checkBoxInp}
              workshops={workshops}
              disabled={disabled}
              all={false}
              info={info}
            />
          )}
          {info.packages === "three-workshop" ? (
            <Workshops all={true} />
          ) : (
            <></>
          )}
          <p id="toogle-talkshow" className="toogle"></p>
        </div>
      </div>
    </>
  );
}

export default PopUp1;
