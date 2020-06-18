import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

function Main({navigation}){
  return (
    <View style={styles.container}>

    <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
    />

    <TouchableOpacity style={styles.button} onPress={() => {goLogin({navigation})}} >
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>

    <Text style={styles.textSign} onPress={() => {goCadastro({navigation})}}>Cadastre-se</Text>

    </View>
  )
}

function goLogin({navigation}){
  return navigation.navigate('Login');
}
function goCadastro({navigation}){
  return navigation.navigate('Cadastro');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  logo: {
    width: 200,
    height: 300,
    borderRadius: 0
  },
  button: {
    width: 300,
    height: 42,
    borderRadius: 4,
    backgroundColor: '#3498db',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  textSign: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default Main;