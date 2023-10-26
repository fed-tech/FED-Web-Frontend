import { useEffect, useState, useContext } from "react";

// Components
import MyEventCards from "./MyEventCards";

// MicroInterAction
import Load from "../../../../MicroInterAction/Load";

// img
import cancel from "../../../../assets/SkillHunt/XCircle.png";

// axios
import axios from "axios";

// state
import AuthContext from "../../../../store/auth-context";

// css
import "./Css/MyEvent.module.css";

export default function MyEvents() {
  const [card, setCard] = useState([]);
  const [show, setShow] = useState(false);
  const [cardNo, setCardNo] = useState("");
  const [currTeam, setCurrTeam] = useState([]);
  const [mainLoading, setMainLoading] = useState(true);
  const [teamLoading, setTeamLoading] = useState(true);

  const authCtx = useContext(AuthContext);

  const getuserformdetails = async () => {
    var result = await axios.get("/form/getuserformdetails", {
      headers: {
        Authorization: authCtx.token,
      },
    });

    setMainLoading(false);
    setCard(result.data);
  };

  const getTeamDetails = async (info) => {
    setTeamLoading(true);
    setCurrTeam([]);
    var result = await axios.get(`/form/getteamdetails?formid=${info._id}`, {
      headers: {
        Authorization: authCtx.token,
      },
    });
    setCurrTeam(result.data);
    setTeamLoading(false);
  };

  useEffect(() => {
    getuserformdetails();
  }, []);

  return (
    <div className="viewEventss">
      <div className="viewevents">
        {mainLoading ? (
          <div>
            <Load />
          </div>
        ) : (
          <></>
        )}
        {card.map((e, idx) => {
          return (
            <MyEventCards
              info={e}
              key={idx}
              setShow={setShow}
              setCardNo={setCardNo}
              getTeamDetails={getTeamDetails}
            />
          );
        })}
      </div>
      {show ? (
        <div className="modal">
          {teamLoading ? <Load /> : <></>}
          <img
            src={cancel}
            alt=""
            onClick={() => setShow(false)}
            id="CloseIcon"
          />
          <table className="table">
            <th className="th" colSpan={2} style={{ fontSize: "1.5rem" }}>
              Team Details
            </th>
            <tr className="tr">
              <th className="th">Member</th>
              <th className="th">Actions</th>
            </tr>
            {currTeam.map((member) => {
              return (
                <tr className="tr">
                  <td className="td">{member.name}</td>
                  <td className="td">
                    <a href={`${member.token}`} target="_blank">
                      <button className="deleteMemberBtn">Remove</button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
