import React, { useState, Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";


class Register extends Component {
    render(){
        return (
            <View >
              <ScrollView>
                <Text >Perfil</Text>
                <ButtonGroup
                  selectedIndex={userTypeIndex}
                  onPress={selectedIndex => setUserTypeIndex(selectedIndex)}
                  buttons={buttons.type}
                  innerBorderStyle={{ width: 0, color: "white" }}
                  containerBorderRadius={0}
                  underlayColor={"#aaa"}
                />
        
                <Text >Nome</Text>
                <TextInput value={userFullName} onChangeText={setUserFullName} placeholder="Digite seu nome" />
        
                <Text >Sexo</Text>
                <ButtonGroup
                  selectedIndex={userGenderIndex}
                  onPress={selectedIndex => setUserGenderIndex(selectedIndex)}
                  buttons={buttons.gender}

                  innerBorderStyle={{ width: 0, color: "white" }}
                  containerBorderRadius={0}
                  underlayColor={"#aaa"}
                />
                <Text >Altura</Text>
                <Slider
                  value={1.6}
                  minimumValue={1}
                  minimumTrackTintColor={"#ccc"}
                  maximumTrackTintColor={"#fff"}
                  thumbTintColor={"#f80"}
                  maximumValue={3}
                />
        
                <Text >Peso</Text>
                <Slider
                  value={30}
                  minimumValue={5}
                  minimumTrackTintColor={"#ccc"}
                  maximumTrackTintColor={"#fff"}
                  thumbTintColor={"#f80"}
                  maximumValue={250}
                />
        
                <Text >Data de Nascimento</Text>
        
                <Text >CPF</Text>
                <TextInput placeholder="Digite seu CPF" />
        
                <Text >Objetivo</Text>
                <TextInput placeholder="Informe seu objetivo" />
        
                <Text >Email</Text>
                <TextInput placeholder="Digite seu e-mail" />
        
                <Text >Senha</Text>
                <TextInput
                 
                  placeholder="Digite sua senha"
                  secureTextEntry={true}
                />
        
                <Text >Confirme sua Senha</Text>
                <Input
                  placeholder="Testing"
                  rightIcon={{ name: "https", color: "#f80" }}
                />
        
                <TouchableOpacity
                  
                  onPress={() => {
                    onClick({ navigation });
                  }}
                >
                  <Text >Login</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
    }
}