import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { ButtonGroup, Slider } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-datepicker"

function Cadastro({ navigation }) {
  const [userTypeIndex, setUserTypeIndex] = useState(0);
  const [userGenderIndex, setUserGenderIndex] = useState(0);
  const [chosenDate, setChosenDate] = useState(new Date());

  const buttons = {
    type: ["Aluno", "Professor"],
    gender: ["Masculino", "Feminino"],
  };
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
        <TextInput style={styles.input} placeholder="Digite seu nome" />

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
          value={1.6}
          minimumValue={1}
          minimumTrackTintColor={"#ccc"}
          maximumTrackTintColor={"#fff"}
          thumbTintColor={"#f80"}
          maximumValue={3}
        />

        <Text style={styles.textButton}>Peso</Text>
        <Slider
          value={30}
          minimumValue={5}
          minimumTrackTintColor={"#ccc"}
          maximumTrackTintColor={"#fff"}
          thumbTintColor={"#f80"}
          maximumValue={250}
        />

        <Text style={styles.textButton}>Data de Nascimento</Text>
        <DatePicker mode="date" value={''} confirmBtnText="OK" cancelBtnText="Cancelar"/>
        

        <Text style={styles.textButton}>CPF</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF" />

        <Text style={styles.textButton}>Objetivo</Text>
        <TextInput style={styles.input} placeholder="Informe seu objetivo" />

        <Text style={styles.textButton}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />

        <Text style={styles.textButton}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" />

        <Text style={styles.textButton}>Confirme sua Senha</Text>
        <TextInput style={styles.input} placeholder="Confirme sua senha" />
      </ScrollView>
    </View>
  );
}

function onClick({ navigation }) {
  return navigation.navigate("Profile");
}

const styles = StyleSheet.create({
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
});

export default Cadastro;
