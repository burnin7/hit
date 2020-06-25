const connect = require("../connect/connect-client");

exports.createUserWithEmailAndPassword = async (email, password) => {
  const res = await connect.client
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err));

    return res.user.uid;
};
