import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import SendOTP from "../SendOTP/SendOTP";
import "../Styles/GoogleLogin/GoogleLogin.scss"
const GoogleLoginPage = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const responseGoogle = response => {
    console.log(response);
    setLogin(true);
    setUserName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setImgUrl(response.profileObj.imageUrl);
  };
  return (
    <section id="login">
      {login ? (
        <SendOTP userName={userName} email={email} imgUrl={imgUrl} />
      ) : (
        <div>
        <GoogleLogin
          clientId="277086162918-2d6k5id3ofsuh0fc4cdcobh2283hc000.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google-login-button "
        />
        </div>
      )}
    </section>
  );
};

export default GoogleLoginPage;
