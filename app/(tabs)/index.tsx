import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    if (!isNaN(pesoNum) && !isNaN(alturaNum) && pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc >= 30 && imc < 39.9) {
        classificacao = 'Obesidade';
      } else {
        classificacao = 'Obesidade grave';
      }

      setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    } else {
      setResultado('Por favor, insira valores válidos para peso e altura.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
      <View style={styles.imgtexto}>
        <Image 
          source={require('./img/balanca.png')} 
          style={styles.image}
        />
        <Text style={styles.titulo}>Te Amo Professor</Text>
        </View>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          placeholder="Ex: 70"
        />
        <Text style={styles.label}>Altura (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          placeholder="Ex: 1.75"
        />
        <Button title="Calcular" onPress={calcularIMC} color="#32b9be" />
        
        {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#32b9be',
    padding: 30,
  },
  imgtexto: {
    height: 200,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    
    backgroundColor: '#32b9be',
  },
  container: {
    flex: 0.75,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fdf4b0',
    borderWidth: 5,
    borderRadius: 20,
    paddingTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  titulo: {
    height: 30,
    fontSize: 28,
    marginBottom: 20,
    color: '#f6f6f6',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  label: {
    paddingTop: 5,
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    padding: 5,
    marginBottom: 12,
    borderRadius: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
