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

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = `{
    token: loginUser(email:"${username}", password:"${password}" )
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
          onClick({ navigation, data });
        }}
      >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function onClick({ navigation, data }) {
  axios({
    url: "http://localhost:4000",
    method: "post",
    data: {
      query: data,
    },
  })
    .then(res => console.log(res.data.data))
    .catch(err => console.log(err));
  return navigation.navigate("Profile");
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
});

export default Login;
