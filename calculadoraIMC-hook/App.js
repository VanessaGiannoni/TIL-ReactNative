import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [peso, alteraPeso] = useState('80');
  const [altura, alteraAltura] = useState('1.84');
  const [imc, alteraIMC] = useState(0);

  function calcularIMC() {
    const indice = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));
    alteraIMC(indice.toFixed(1));
  }

  return (
    <View>
      <Text>Calculadora de IMC</Text>
      <TextInput placeholder="Peso" keyboardType="numeric" value={peso} onChangeText={(p) => { alteraPeso(p) }} />
      <TextInput placeholder="Altura" keyboardType="numeric" value={altura} onChangeText={(a) => { alteraAltura(a) }} />
      <Button onPress={() => calcularIMC()} title=" Calcular " />
      <Text>{imc}</Text>
    </View>
  );
}
