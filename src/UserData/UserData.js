import React from "react";
import "../Styles/UserData/UserData.scss";
const UserData = ({ email }) => {
  fetch(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages`, {
    headers: {
      access_token:
        "ya29.a0AfH6SMD3TOJ0G0tfC0NBx6R5jz9-zg_id3OVPcipInb3NerVTwB99Ecm9XotXijKuRClp3qxPbzmq3LWSTG7I6wiYWkD7LRN6Z7Nf00RJN9ejtPhZajefdqcmDddQS6jyrUsPmYYgv9X_NszUTi9u5STLor_vAYrDR2UG3DOj10",
      refresh_token:
        "1//0gkolvlc16CgVCgYIARAAGBASNwF-L9IrEsddpNbIvbF1tzn7IKnuOFJRYcv6Qt2YEdIQi7Gqow47Q6Qfv1QupwThen-g_lO96k8",
      token_type: "Bearer",
      expiry_date: 1611393054978,
      "Access-Control-Allow-Headers": "Authorization, Lang",
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
