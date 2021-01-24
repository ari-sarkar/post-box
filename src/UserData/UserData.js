import React from "react";
import "../Styles/UserData/UserData.scss";
const UserData = ({ email }) => {
  const access_token =
    "ya29.a0AfH6SMD3TOJ0G0tfC0NBx6R5jz9-zg_id3OVPcipInb3NerVTwB99Ecm9XotXijKuRClp3qxPbzmq3LWSTG7I6wiYWkD7LRN6Z7Nf00RJN9ejtPhZajefdqcmDddQS6jyrUsPmYYgv9X_NszUTi9u5STLor_vAYrDR2UG3DOj10";
  const refresh_token =
    "1//0gkolvlc16CgVCgYIARAAGBASNwF-L9IrEsddpNbIvbF1tzn7IKnuOFJRYcv6Qt2YEdIQi7Gqow47Q6Qfv1QupwThen-g_lO96k8";
  fetch(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages`, {
    headers: {
      access_token: access_token,
      refresh_token: refresh_token,
      token_type: "Bearer",
      expiry_date: 1611393054978,
      scope: "https://www.googleapis.com/auth/gmail.readonly",
      "Access-Control-Allow-Headers": "Authorization, Lang",
      "Content-Type": "application/x-www-form-urlencoded",
      client_id:
        "772609921073-ak17pk0ne0culh4ijufcejachiakupe7.apps.googleusercontent.com",
      project_id: "quickstart-1611387465750",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_secret: "35sbslCiwcNmlRkMtkV7Y_0p",
      redirect_uris: ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"],
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
