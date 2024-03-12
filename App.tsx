import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite seu nome:</Text>
      <TextInput style={styles.textinp}/>
      <TouchableOpacity style={styles.botao}>
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
    fontSize: 40,
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
