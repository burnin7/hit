
client
  .auth()
  .createUserWithEmailAndPassword("bruno.ricardo18@yahoo.com.br", "Bruno123")
  .then((res, err) => console.log(res.user.uid))
  .catch(error => {
    const errMessage = error.message;
    const errCode = error.code;

    console.log(errCode + " - " + errMessage);
  });
