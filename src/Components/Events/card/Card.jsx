import React, { useEffect, useState,useContext } from "react";
import "../../css/Events/eventCard.css";
import RegForm from './regForm'
import { Alert } from '../../../MicroInterAction/Alert';
import AuthContext from "../../../store/auth-context";
import "../../Team/css/loading.css";
import axios from "axios";

export default function Card() {
  const authCtx = useContext(AuthContext);
  const [regLive, setRegLive] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [loading,setLoading] = useState(true)
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
});
const [eventcard,setEvent] = useState([])
const getEvent = async () => {
  try{
    var result = await axios.get("/form/getactiveform")
    if(result.status == 200){
      var final = result.data.map((e,idx)=>{
        var temp = {}
        temp.formid = e._id
        temp.title = e.title
        var date = new Date(e.date)
        temp.date = date.getDate()
        temp.month = date.toLocaleString('default', { month: 'long' });
        temp.img = e.img
        temp.dis = {}
        temp.dis.d1 = e.description.split("\n")[0]
        temp.dis.d2 = e.description.split("\n")[1]
        temp.dis.d3 = e.description.split("\n")[2]
        temp.dis.d4 = e.description.split("\n")[3]
        temp.dis.d5 = e.description.split("\n")[4]
        temp.isLive = e.active
        temp.amount = e.amount
        temp.upi = e.upi
        temp.formelement = e.formelement 
        temp.isTeam = e.isTeam
        return temp
      })
      console.log(final)
      setEvent(final)
      setLoading(false)
    }
  }catch(err){

  }
}
  useEffect(() => {
    getEvent()
  },[])
  const [currentform,setCurentForm] = useState("")
  const [currentformelement,setCurentFormElement] = useState([])
  const handleRegClick= (ele)=>{
    setCurentForm(ele.target.id)
    eventcard.forEach((e)=>{
      if(e.formid == ele.target.id){
        e.formelement = e.formelement.map((e)=>{
          var temp = {}
          temp.name = e.name
          temp.type = e.type
          temp.placeholder = "Enter your " + e.name
          temp.required = true
          temp.value = e.value
          return temp
        })
        setCurentFormElement(e)
        setShowPopUp(true)
      }
    })
  }
  return (
    <div className="cards">
    {loading ? (
        <div className="centerLoader">
          <div className="arc" />
          <h1 className="loadingSpanH1">
            <span className="loadingSpan">Loading</span>
          </h1>
        </div>
      ) : (
        eventcard.map((data) => {
          return (
            <div className="eventcard">
              <div className="carddetails">
                <div className="left">
                  <div className="datemonth">
                    <p className="date">{data.date}</p>
                    <p className="month">{data.month}</p>
                  </div>
                  <img className="image" src={data.img} />
                </div>
                <div className="right">
                  <h1 className="title">{data.title}</h1>
                  <div className="eventDetail">
                    {data.dis.d1}
                    <br />
                    <br />
                    {data.dis.d2}
                    <br />
                    <br />
                    {data.dis.d3}
                    <br />
                    <br />
                    {data.dis.d4}
                  </div>
                  {data.isLive
                    ? <a className="regBtn" id={data.formid} onClick={handleRegClick}>Registration Open</a>
                    :
                    <a className="regBtn">
                      Registration Closed
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="lockSvg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>}
                </div>
              </div>
            </div>
          );
        })
      )}
      {showPopUp &&
        <RegForm showPopUp={showPopUp}
                  setShowPopUp={setShowPopUp} setError={setError} formid={currentform} formelement={currentformelement}
        />}
        <Alert variant={variants} val={setError} />
    </div>
    
  );
}
