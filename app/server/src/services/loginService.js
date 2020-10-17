const connect = require("../connect/connect-client");

exports.signUserWithEmailAndPassword = async (email, password) => {
  let res = {};
  const client = await connect.client
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(
      err =>
        (res = {
          code: err.code,
          message: err.message,
        }),
      res
    );
  res["token"] = (await client.user.getIdTokenResult()).token;
  res["code"]  = res.code  ? res.code : "auth/success"
  return res;
};
