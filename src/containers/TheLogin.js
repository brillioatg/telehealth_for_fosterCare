import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import brillioimg from "./brillio-logo.png";

const TheLogin = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let history = useHistory();
  const routeChange = () =>{ 
    history.push("dashboard");
  }

  // User Login info
  const database = [
    {
      username: "Steve",
      password: "",
      role: "CaseManager"
    },
    {
      username: "Arthur",
      password: "",
      role: "FosterChild"
    },
    {
      username: "Catrina",
      password: "",
      role: "FosterParent"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "invalid password"
  };
  const redirectToDashboard = (event) => {
    routeChange();
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    console.log(userData);
    // Set user info
    if (userData) {
      localStorage.setItem("user", userData.username);
      localStorage.setItem("role", userData.role);        
      setIsSubmitted(true);
      redirectToDashboard();
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="loginRoot">
          <div className="app">
            <div className="loginArea">
              <div className="logo"><img src={brillioimg} alt="Brillio Technologies" /></div>
              {/* <div className="title">Welcome to Telehealth App.</div>       */}
              <div className="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
              </div>
            </div>
          </div>
    </div>
  );  
}

export default TheLogin
