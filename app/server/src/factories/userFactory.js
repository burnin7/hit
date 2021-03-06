const trainingService = require("../services/trainingService");

exports.buildUser = function(id, data) {
  return {
    id: id,
    name: data.name,
    birthDate: data.birthDate,
    gender: data.gender,
    email: data.email,
    phone: data.phone,
    username: data.username,
    password: data.password,
    cpf: data.cpf,
    training: trainingService.getTrainingById(data.training),
  };
};
