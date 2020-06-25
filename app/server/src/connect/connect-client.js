const client = require("firebase");

firebaseConfig = {
  apiKey: "AIzaSyBVX_PlWS94v5inICkcH7UtXXztfENtjC4",
  authDomain: "hit-database.firebaseapp.com",
  databaseURL: "https://hit-database.firebaseio.com",
  projectId: "hit-database",
  storageBucket: "hit-database.appspot.com",
  messagingSenderId: "904594702458",
  appId: "1:904594702458:web:0da500e67c6876fa483bc3",
};

exports.client  = client.initializeApp(firebaseConfig);
