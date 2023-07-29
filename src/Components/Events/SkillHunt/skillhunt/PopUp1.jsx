import React from "react";

function PopUp1({ dataInp, info, setInfo }) {
  const checkBoxInp = (e) => {
    const { name } = e.target;

    if (info.workshops[name]) {
      setInfo({ ...info, workshops: { ...info.workshops, [name]: false } });
    } else {
      setInfo({ ...info, workshops: { ...info.workshops, [name]: true } });
    }
  };

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
          <h3 className="step-title h3marginTop">Interested Workshops</h3>
          <div className="inpDivC">
            <div className="radiobgnDiv">
              <input
                onChange={checkBoxInp}
                type="checkbox"
                id="cloud"
                name="cloud"
                value="cloud"
                checked={info.workshops.cloud}
              />
              <label htmlFor="cloud" className="labelTagInp">
                Cloud
              </label>
            </div>
            <div className="radiobgnDiv">
              <input
                onChange={checkBoxInp}
                type="checkbox"
                id="trade"
                name="trade"
                value="trade"
                checked={info.workshops.trade}
              />
              <label htmlFor="trade" className="labelTagInp">
                Trade
              </label>
            </div>
            <div className="radiobgnDiv">
              <input
                onChange={checkBoxInp}
                type="checkbox"
                id="graphics"
                name="graphics"
                value="graphics"
                checked={info.workshops.graphics}
              />
              <label htmlFor="graphics" className="labelTagInp">
                Graphics
              </label>
            </div>
          </div>
          {/* <h3 className="step-title h3marginTop">
            Do you want access to the Speaker Session?
          </h3>
          <div className="inpDivC">
            <div className="radiobgnDiv">
              <input
                onChange={dataInp}
                type="radio"
                id="twoSessions"
                name="speaker"
                value="true"
                checked={info.speaker == "true"}
              />
              <label htmlFor="twoSessions" className="labelTagInp">
                Yes
              </label>
            </div>
            <div className="radiobgnDiv">
              <input
                onChange={dataInp}
                type="radio"
                id="threeSessions"
                name="speaker"
                value="false"
                checked={info.speaker == "false"}
              />
              <label htmlFor="threeSessions" className="labelTagInp">
                No
              </label>
            </div>
          </div> */}
          <p id="toogle-talkshow" className="toogle"></p>
        </div>
      </div>
    </>
  );
}

export default PopUp1;
