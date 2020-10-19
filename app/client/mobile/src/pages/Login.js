import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import axios from "axios";

let err;

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const data = `{
    login: loginUser(email:"${username}", password:"${password}" ){
      token
      code
      message
    }
  }`;

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        value={username}
        autoCapitalize="none"
        onChangeText={user => setUsername(user)}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={pass => setPassword(pass)}
        placeholder="Senha"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onClick({ navigation, data, setMessage });
        }}
      >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.errorMessage}>
        {message}
      </Text>
    </View>
  );
}

function onClick({ navigation, data, setMessage }) {
  axios({
    url: "http://localhost:4000",
    method: "post",
    data: {
      query: data,
    },
  })
    .then(res => {
      let login = res.data.data.login;
      if (login.code != "auth/success") {
        setMessage(login.message);
      } else {
        return navigation.navigate("Profile");
      }
    })
    .catch(err => setMessage("Não foi possível executar..."));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c3e50",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },
  button: {
    width: 300,
    height: 42,
    borderRadius: 4,
    backgroundColor: "#3498db",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  errorMessage: {
    width: 300,
    height: 42,
    fontSize: 16,
    color: "#fff",
    borderRadius: 4,
    backgroundColor: "#660000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Login;
