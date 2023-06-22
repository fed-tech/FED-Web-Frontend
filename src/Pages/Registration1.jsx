import React from 'react';

// svg
import filter from '../Img/Filter.svg';

export default function Registration1() {
    return (
        <div className="memberRight">
            <div className="registrationsTop">
                <h1>NUMBER OF REGISTRATIONS</h1>
                <div className="filter">
                    <img src={filter} alt="" />Filter</div>
            </div>
            <div className="registrationsBottom">
                <table className="registrationTable">
                    <tr className="tableHead font1">
                        <th>Event Name</th>
                        <th>Registration Stats</th>
                        <th>Event Date</th>
                    </tr>

                    <div className="scroll">
                        <tr className="tableData font1">
                            <td>KALKI</td>
                            <td>500</td>
                            <td>13 FEBRUARY</td>
                        </tr>
                        <tr className="tableData font1">
                            <td>KALKI</td>
                            <td>500</td>
                            <td>13 FEBRUARY</td>
                        </tr>
                        <tr className="tableData font1">
                            <td>KALKI</td>
                            <td>500</td>
                            <td>13 FEBRUARY</td>
                        </tr>
                        <tr className="tableData font1">
                            <td>KALKI</td>
                            <td>500</td>
                            <td>13 FEBRUARY</td>
                        </tr>
                        <tr className="tableData font1">
                            <td>KALKI</td>
                            <td>500</td>
                            <td>13 FEBRUARY</td>
                        </tr>
                        <tr className="tableData font1">
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