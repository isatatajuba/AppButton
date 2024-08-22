import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Componentes principal de aplicação

const App = () => {

  //Função chamada quando um dos botes e precionado 
  const handleButtonPress = () => {
    alert('O botão foi precinado'); //exibe um alerta na tela

  };


  //Retorna a interface de usuario do componente
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Botões em React Native</Text>
      <Button title='Botao' onPress={handleButtonPress}></Button>
      <TouchableOpacity style={styles.customButton} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
    </View>
  );
};

//Estilo para os compomentes
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
}

);

export default App;