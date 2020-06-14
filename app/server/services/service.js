const admin = require("firebase-admin");
const key = require("../connect/firebase-service-key");
const userFactory = require("../factories/userFactory");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const db = admin.firestore();

exports.getTrainerById = async id => {
  const response = await db.collection("trainer").doc(id).get();
  return userFactory.buildUser(response.id, response.data());
};

exports.createNewTrainer = async data => {
  const document = db.collection("trainer").doc();
  const response = await document.set(data.user).then(() => document.id);
  return response;
};

exports.updateTrainer = async (id, data) => {
  const document = db.collection("trainer").doc(id);
  const response = await document.update(data);
  return response;
};

exports.deleteTrainer = async id => {
  const document = db.collection("trainer").doc(id);
  await document.delete().then(() => true).catch(() => false);
};
