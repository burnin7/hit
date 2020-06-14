const { db } = require("../connect/connect");
const userFactory = require("../factories/userFactory");

exports.getUserById = async (type, id) => {
  const response = await db.collection(type).doc(id).get();
  return userFactory.buildUser(response.id, response.data());
};

exports.createNewUser = async (type, data) => {
  const document = db.collection(type).doc();
  const response = await document.set(data.user).then(() => document.id);
  return response;
};

exports.updateUser = async (type, id, data) => {
  const document = db.collection(type).doc(id);
  const response = await document.update(data);
  return response;
};

exports.deleteUser = async (type, id) => {
  const document = db.collection(type).doc(id);
  await document.delete().then(() => true).catch(() => false);
};
