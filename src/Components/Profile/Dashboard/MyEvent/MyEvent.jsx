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
import MECss from "./Css/MyEvent.module.css";

export default function MyEvents() {
  const [card, setCard] = useState([]);
  const [show, setShow] = useState(false);
  const [cardNo, setCardNo] = useState("");
  const [currTeam, setCurrTeam] = useState([]);
  const [mainLoading, setMainLoading] = useState(false);
  const [teamLoading, setTeamLoading] = useState(true);

  const authCtx = useContext(AuthContext);

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

  const getuserformdetails = async () => {
    try {
      var result = await axios.get("/form/getuserformdetails", {
        headers: {
          Authorization: authCtx.token,
        },
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }

    setMainLoading(false);
    setCard(result.data);
  };

  return (
    <div className={MECss.viewEventss}>
      <div className={MECss.viewevents}>
        {mainLoading ? (
          <div className={MECss.loadCenter}>
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
        <div className={MECss.modal}>
          {teamLoading ? <Load /> : <></>}
          <img
            src={cancel}
            alt=""
            onClick={() => setShow(false)}
            id="CloseIcon"
          />
          <table className={MECss.table}>
            <th className={MECss.th} colSpan={2} style={{ fontSize: "1.5rem" }}>
              Team Details
            </th>
            <tr className={MECss.tr}>
              <th className={MECss.th}>Member</th>
              <th className={MECss.th}>Actions</th>
            </tr>
            {currTeam.map((member) => {
              return (
                <tr className={MECss.tr}>
                  <td className={MECss.td}>{member.name}</td>
                  <td className={MECss.td}>
                    <a href={`${member.token}`} target="_blank">
                      <button className={MECss.deleteMemberBtn}>Remove</button>
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
