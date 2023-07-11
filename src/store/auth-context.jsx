import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    name: "",
    pic: "",
    email: "",
    rollNo: "",
    school: "",
    college: "",
    mobileNo: "",
    selected: "",
    access: "",
    regForm: [],
  },
  target: null,
  login: async (token) => {},
  logout: () => {},
  settarget: () => {},
  update: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();

  const remainingDuration = expirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const userdata = localStorage.getItem("user");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    return null;
  }
  var ms = remainingTime,
    min = Math.floor((ms / 1000 / 60) << 0),
    sec = Math.floor((ms / 1000) % 60);

  console.log(min + ":" + sec);
  const finaluser = JSON.parse(userdata);
  return {
    token: storedToken,
    duration: remainingTime,
    user: finaluser,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken = null;
  let initialuser = {};
  let logedin = false;
  if (tokenData) {
    initialToken = tokenData.token;
    initialuser = tokenData.user;
    logedin = true;
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialuser);
  const [target, setTarget] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(logedin);
  // const [admin, setAdmin] = useState(false);

  console.log("userislogedin : -" + userIsLoggedIn);

  const targetHandler = (t) => {
    setTarget(t);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    // setAdmin(false);
    localStorage.removeItem("admin");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (
    name,
    email,
    pic,
    rollNo,
    school,
    college,
    mobileNo,
    selected,
    regForm,
    access,
    token,
    expirationTime
  ) => {
    localStorage.setItem("token", token);
    const setuserdata = {
      name: name,
      pic: pic,
      email: email,
      rollNo: rollNo,
      school: school,
      college: college,
      mobileNo: mobileNo,
      selected: selected,
      access: access,
      regForm: regForm,
    };

    localStorage.setItem("user", JSON.stringify(setuserdata));

    const nowTime = new Date().getTime();
    const exptime = nowTime + expirationTime;
    const remainingTime = calculateRemainingTime(exptime);
    localStorage.setItem("expirationTime", exptime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
    setUser(setuserdata);
    setToken(token);
    setUserIsLoggedIn(true);
  };

  const updateHandler = (
    name,
    email,
    pic,
    rollNo,
    school,
    college,
    mobileNo,
    selected,
    access,
    regForm
  ) => {
    const setuserdata = {
      name: name,
      pic: pic,
      email: email,
      rollNo: rollNo,
      school: school,
      college: college,
      mobileNo: mobileNo,
      selected: selected,
      access: access,
      regForm: regForm,
    };
    console.log("Update function called");
    localStorage.setItem("user", JSON.stringify(setuserdata));
    setUser(setuserdata);
  };

  useEffect(() => {
    if (tokenData) {
      setToken(tokenData.token);
      setUserIsLoggedIn(true);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
      // setUser(user);
      console.log(user);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      user: user,
      target: target,
      login: loginHandler,
      logout: logoutHandler,
      settarget: targetHandler,
      update: updateHandler,
      // admin: admin,
      // setAdmin: setAdmin,
    }),
    [token, userIsLoggedIn, target]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
