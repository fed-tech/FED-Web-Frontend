import React from "react";

// svg
import filter from "../Img/Filter.svg";

// css
import tco from "./Css/Profilecss/MemberProfile.module.css";


export default function Registration1() {
  return (
    <div className={tco.memberRight}>
      <div className={tco.registrationsTop}>
        <h1>NUMBER OF REGISTRATIONS</h1>
        <div className={tco.filter}>
          <img src={filter} alt="" />
          Filter
        </div>
      </div>
      <div className={tco.registrationsBottom}>
        <table className={tco.registrationTable}>
          <tr className={`${tco.tableHead} ${tco.font1}`}>
            <th>Event Name</th>
            <th>Registration Stats</th>
            <th>Event Date</th>
          </tr>

          <div className={tco.scroll}>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
            <tr className={`${tco.tableData} ${tco.font1}`}>
              <td>KALKI</td>
              <td>500</td>
              <td>13 FEBRUARY</td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
}