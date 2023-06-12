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
                {/* <div className="left_panel--edge--4KIqx" >

                </div> */}
                <div className="memberRight">
                    <div id="profile">
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
                                        <td className="dets1">Full Name</td>
                                        <td className="vals1">Shruti Kolla</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">Roll Number</td>
                                        <td className="vals1">2105279</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">Email ID</td>
                                        <td className="vals1">2105279@kiit.ac.in</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">Year</td>
                                        <td className="vals1">3rd</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">School</td>
                                        <td className="vals1">CSE</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">College</td>
                                        <td className="vals1">KIIT</td>
                                    </tr>
                                    <tr>
                                        <td className="dets1">Mobile No</td>
                                        <td className="vals1">7978773611</td>
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
