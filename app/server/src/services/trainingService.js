const admin = require("firebase-admin");
const key = require("../connect/firebase-service-key");
const { db } = require("../connect/connect");

exports.getTrainingById = async training => {
  const trainingPath = training.path;
  let ref = (await db.doc(trainingPath).get()).data();
  let a = ref.training.map(exercise => exercise.path);
  return a;
};
