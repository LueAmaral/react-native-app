import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [valorUm, setValorUm] = React.useState('');
  const [valorDois, setValorDois] = React.useState('');
  const media = (parseFloat(valorUm) + parseFloat(valorDois)) / 2;
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Digite o primeiro valor:</Text>
      <TextInput onChangeText={setValorUm} style={styles.textinp}/>
      <Text style={styles.titulo}>{valorUm}</Text>

      <Text style={styles.titulo}>Digite o segundo valor:</Text>
      <TextInput onChangeText={setValorDois} style={styles.textinp}/>
      <Text style={styles.titulo}>{valorDois}</Text>

      <Text style={styles.titulo}>Resultado da Média:</Text>
      {!isNaN(media) && <Text style={styles.titulo}>{media}</Text>}

      <TouchableOpacity  style={styles.botao}>
        <Text style={styles.btntxt}>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,

    },
  titulo: {
    fontSize: 25,
    color: 'black',
  },
  textinp: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    padding: 15,
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 100,
  },
  btntxt: {
    alignSelf: 'center',
    color: 'white',
  }
});
