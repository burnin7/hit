import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, ScrollView} from 'react-native';

function Cadastro({navigation}){
    return (
        <View style={styles.container}>

          <ScrollView style={styles.scrollView}>

            <Text style={styles.textButton}>Nome</Text>
            <TextInput style={styles.input} placehouder="Digite seu nome"/>

            <Text style={styles.textButton}>Sexo</Text>
            <TextInput style={styles.input} placehouder="Selecione seu sexo"/>

            <Text style={styles.textButton}>Altura</Text>
            <TextInput style={styles.input} placehouder="Digite sua altura"/>

            <Text style={styles.textButton}>Peso</Text>
            <TextInput style={styles.input} placehouder="Digite seu peso"/>

            <Text style={styles.textButton}>Data de Nascimento</Text>
            <TextInput style={styles.input} placehouder="Digite sua data de nascimento"/>

            <Text style={styles.textButton}>CPF</Text>
            <TextInput style={styles.input} placehouder="Digite seu CPF"/>

            <Text style={styles.textButton}>Objetivo</Text>
            <TextInput style={styles.input} placehouder="Informe seu objetivo"/>

            <Text style={styles.textButton}>Email</Text>
            <TextInput style={styles.input} placehouder="Digite seu e-mail"/>

            <Text style={styles.textButton}>Senha</Text>
            <TextInput style={styles.input} placehouder="Digite sua senha"/>

            <Text style={styles.textButton}>Confirme sua Senha</Text>
            <TextInput style={styles.input} placehouder="Confirme sua senha"/>

          </ScrollView>

        </View>
    )
}

function onClick({navigation}){
    return navigation.navigate('Profile');
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2c3e50',
    },
    input: {
      marginTop:5,
      alignSelf:'center',
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
    },
    textButton: {
      fontSize: 16,
      color: '#fff',
      marginTop: 10,
      marginLeft: 40,
    },
});

export default Cadastro;