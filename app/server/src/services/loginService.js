const connect = require("../connect/connect-client");

exports.signUserWithEmailAndPassword = async (email, password) => {
  const res = await connect.client
    .auth()
    .signInWithEmailAndPassword(email, password).catch(err=>console.log({
        "code":err.code,
        "message": err.message
    }));
  return (await res.user.getIdTokenResult()).token;
};
