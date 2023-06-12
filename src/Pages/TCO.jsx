// svg
import regStatSvg from "../Img/registrationStats.svg";
import logoutSvg from "../Img/ion_log-out.svg";
import penSvg from "../Img/pen-icon.svg";
// css
import "./Css/Profilecss/MemberProfile.css"

export default function TCO() {
    return (
        <div className="memberBackground">
            <div className="mainbox">

                <div className="memberLeft">
                    <div className="dashboard">

                        <div className="dashboardTop">
                            <h1>DASHBOARD</h1>
                            <div className="profilePic">
                                <img src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg" alt="" />
                            </div>
                            <div className="Position">
                                <p className="name">Shruti kolla</p>
                                <p className="position">Technical Executive</p>
                            </div>

                        </div>

                        <div className="dashboardBottom">
                            <div className="registrationStats">
                                <img src={regStatSvg} alt="" />
                                Registration Stats
                            </div>
                            <div className="logout">
                                <img src={logoutSvg} alt="" />
                                Logout
                            </div>

                        </div>
                    </div>
                </div>

                <div className="memberRight">
                    <div className="profile">
                        <div className="proHeading">
                            
                            <p className="headInnerText">
                                <p>Profile Details</p>
                                    <img src={penSvg} alt="" />
                            </p>
                        </div>
                        <div className="details">
                            <table className="profileTable">
                                <tbody>
                                    <tr>
                                        <td className="dets">Full Name</td>
                                        <td className="vals">Shruti Kolla</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">Roll Number</td>
                                        <td className="vals">2105279</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">Email ID</td>
                                        <td className="vals">2105279@kiit.ac.in</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">Year</td>
                                        <td className="vals">3rd</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">School</td>
                                        <td className="vals">CSE</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">College</td>
                                        <td className="vals">KIIT</td>
                                    </tr>
                                    <tr>
                                        <td className="dets">Mobile No</td>
                                        <td className="vals">7978773611</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
