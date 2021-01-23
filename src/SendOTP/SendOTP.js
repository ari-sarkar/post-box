import React, { useState } from "react";
import "../Styles/SendOTP/SendOTP.scss";
import firebase from "../Firebase/Firebase";
import UserData from "../UserData/UserData";
const SendOTP = ({ userName, email, imgUrl }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const SubmitOTP = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = `+91${phoneNo}`;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(e => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        e.confirm(code)
          .then(result => {
            console.log(result);
            setIsSignedIn(true);
          })
          .catch(err => console.log(err));
      });
  };
  return isSignedIn ? (
    <UserData email={email}/>
  ) : (
    <div id="send-otp-container">
      <div className="user-wrapper">
        <div className="user-image">
          <img src={imgUrl} alt="profile"></img>
        </div>
        <div className="user-details">
          <p className="username">{userName}</p>
          <p className="email">{email}</p>
        </div>
      </div>
      <div className="otp-wrapper">
        <input
          value={phoneNo}
          onChange={e => setPhoneNo(e.target.value)}
        ></input>
        <button onClick={SubmitOTP}>Send OTP</button>
        <div id="recaptcha"></div>
      </div>
    </div>
  );
};

export default SendOTP;
