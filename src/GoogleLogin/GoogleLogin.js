import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import SendOTP from "../SendOTP/SendOTP";
import "../Styles/GoogleLogin/GoogleLogin.scss"
const GoogleLoginPage = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [acessToken, setAcessToken] = useState("");
  const responseGoogle = response => {
    console.log(response);
    setLogin(true);
    setUserName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setImgUrl(response.profileObj.imageUrl);
    setImgUrl(response.profileObj.imageUrl);
    setAcessToken(response.tokenObj.access_token);
  };
  return (
    <section id="login">
      {login ? (
        <SendOTP userName={userName} email={email} imgUrl={imgUrl} acessToken={acessToken} />
      ) : (
        <div>
        <GoogleLogin
          clientId="277086162918-2ak8d3rcaf7v7907ak17qq5kro967t39.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google-login-button"
        />
        </div>
      )}
    </section>
  );
};

export default GoogleLoginPage;
