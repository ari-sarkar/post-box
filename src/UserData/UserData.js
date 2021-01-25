import React from "react";
import "../Styles/UserData/UserData.scss";
const UserData = ({ email, acessToken }) => {
  fetch(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages`, {
    headers: {
      access_token : acessToken
    },
  })
    .then(res => {
      console.log(res, "res1");
      JSON.stringify(res);
      console.log(res, "res1");
    })
    .then(result => console.log(result, "reasult"))
    .catch(err => console.log(err, "err"));
  return <div id="user-data"></div>;
};

export default UserData;
