const admin = require("firebase-admin");
const key = require("./firebase-service-key");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

exports.db = admin.firestore()
