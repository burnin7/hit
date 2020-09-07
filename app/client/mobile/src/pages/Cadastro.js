import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { ButtonGroup, Slider } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";



function Cadastro({ navigation }) {
  const [userTypeIndex, setUserTypeIndex] = useState(0);
  const [userGenderIndex, setUserGenderIndex] = useState(0);
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [chosenDate, setChosenDate] = useState(new Date());
  const [userWeight,setUserWeight] = useState(0)  
  const [userHeight,setUserHeight] = useState(0)  

  const buttons = {
    type: ["Aluno", "Professor"],
    gender: ["Masculino", "Feminino"],
  };

  const data = `mutation{
    newUser(type:"${buttons.type[userTypeIndex]}", user:{
      name: "${userFullName}",
      gender: "${buttons.gender[userGenderIndex]}",
      email: "${userEmail}",
      password: "${userPassword}"
    })
  }`;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textButton}>Perfil</Text>
        <ButtonGroup
          selectedIndex={userTypeIndex}
          onPress={selectedIndex => setUserTypeIndex(selectedIndex)}
          buttons={buttons.type}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          selectedButtonStyle={styles.selectedButtonStyle}
          innerBorderStyle={{ width: 0, color: "white" }}
          containerBorderRadius={0}
          underlayColor={"#aaa"}
        />

        <Text style={styles.textButton}>Nome</Text>
        <TextInput
          style={styles.input}
          value={userFullName}
          onChangeText={setUserFullName}
          placeholder="Digite seu nome"
        />

        <Text style={styles.textButton}>Sexo</Text>
        <ButtonGroup
          selectedIndex={userGenderIndex}
          onPress={selectedIndex => setUserGenderIndex(selectedIndex)}
          buttons={buttons.gender}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          selectedButtonStyle={styles.selectedButtonStyle}
          innerBorderStyle={{ width: 0, color: "white" }}
          containerBorderRadius={0}
          underlayColor={"#aaa"}
        />
        <Text style={styles.textButton}>Altura</Text>
        <Slider
          value={userHeight}
          onValueChange={setUserHeight}
          minimumValue={1}
          minimumTrackTintColor={"#ccc"}
          maximumTrackTintColor={"#fff"}
          thumbTintColor={"#f80"}
          maximumValue={3}
        />

        <Text style={styles.textButton}>Peso</Text>
        <Slider
          value={userWeight}
          onValueChange={setUserWeight}
          minimumValue={5}
          minimumTrackTintColor={"#ccc"}
          maximumTrackTintColor={"#fff"}
          thumbTintColor={"#f80"}
          maximumValue={250}
        />

        <Text style={styles.textButton}>Data de Nascimento</Text>

        <Text style={styles.textButton}>CPF</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF" />

        <Text style={styles.textButton}>Objetivo</Text>
        <TextInput style={styles.input} placeholder="Informe seu objetivo" />

        <Text style={styles.textButton}>Email</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <Text style={styles.textButton}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={userPassword}
          onChangeText={setUserPassword}
          secureTextEntry={true}
        />

        <Text style={styles.textButton}>Confirme sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        /><Icon name="accessibility"/>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onClick({ navigation, data });
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
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
  //return navigation.navigate("Profile");
}

const styles = StyleSheet.create({}/*{
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2c3e50",
  },
  input: {
    marginTop: 5,
    alignSelf: "center",
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    marginLeft: 40,
  },
  buttonStyle: {
    backgroundColor: "white",
    borderWidth: 0,
  },
  selectedButtonStyle: {
    backgroundColor: "#ccc",
  },
  input2: {
    fontSize: 16,

    color: "#fff",
    height: 30,
    //backgroundColor: "#fff",
    borderColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
}*/);

export default Cadastro;
