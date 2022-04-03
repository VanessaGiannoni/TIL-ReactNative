import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export default function App() {
  const [soma, setSoma] = useState('0');
  const [divisao, setDivisao] = useState('0');
  const [multiplicacao, setMultiplicacao] = useState('0');
  const [subtracao, setSubtracao] = useState('0');

  const [primeiroValor, setPrimeiroValor] = useState('0')
  const [segundoValor, setSegundoValor] = useState('0');

  const calcular = () => {
    const valor1 = parseFloat(primeiroValor);
    const valor2 = parseFloat(segundoValor);

    const somar = (valor1 + valor2).toFixed(1);
    const subtrair = (valor1 - valor2).toFixed(1);
    const dividir = (valor1 / valor2.toFixed(1));
    const multiplicar = (valor1 * valor2).toFixed(1);

    setSoma(somar);
    setSubtracao(subtrair);

    if((valor1 > 0) && (valor2 > 0)) {
      setDivisao(dividir);
    } else {
      setDivisao(0);
    }

    setMultiplicacao(multiplicar);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calculadora básica</Text>

      <Text>Valor 1:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Valor 1"
        keyboardType='numeric'
        value={primeiroValor}
        onChangeText={ (val) => setPrimeiroValor(val) }
      />

      <Text>Valor 2</Text>
      <TextInput 
        style={styles.input}
        placeholder="Valor 2"
        keyboardType='numeric'
        value={segundoValor}
        onChangeText={ (val) => setSegundoValor(val) }
      />
      <Button
        style={styles.button}
        title='Calcular'
        onPress={ () => calcular() }
      >
      </Button>

      <Text style={styles.subtitle}>Resultados: </Text>
      <Text style={styles.h3}> Soma: { soma } </Text>
      <Text style={styles.h3}> Subtração:  { subtracao } </Text>
      <Text style={styles.h3}> Divisão: { divisao } </Text>
      <Text style={styles.h3}> Multiplicação:  { multiplicacao } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },
  input: {
    borderColor: '#666',
    borderWidth: 2,
    padding: 10,
    height: 40,
    width: 180,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
    height: 50,
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 10
  }
});
