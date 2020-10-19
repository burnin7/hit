const connect = require("../connect/connect-client");

exports.signUserWithEmailAndPassword = async (email, password) => {
  let login = {};
  await connect.client
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async res => {
      login["token"] = (await res.user.getIdTokenResult()).token;
      login["code"] = "auth/success";
      login["message"] = "Success!";
    })
    .catch(err => {
      login["code"] = err.code;
      login["message"] = err.message;
    });
    console.log(login);
    return login;
};
