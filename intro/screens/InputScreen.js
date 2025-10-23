import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
import React, { Component, useState } from "react";

export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');

  const mostrarAlerta = () => {
  if ([nombre.trim(), password.trim(), comentario.trim()].includes('')) {
    Alert.alert('Error', 'Por favor rellena todos los campos.');
  } else {
    Alert.alert(`Hola, ${nombre}!`, `Tu nombre ha sido registrado con éxito. Tu contraseña es ${password}`);
    alert(`Hola, ${nombre}!, Tu nombre ha sido registrado con éxito. Tu contraseña es ${password}`);
  } 
};


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa tu nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Ej. Jafet"
        value={nombre}
        onChangeText={setNombre}
        keyboardType="default"
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Ej. Password"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        placeholder="Ej. Un comentario"
      />

      <Button
        title="Saludar"
        onPress={mostrarAlerta}
        color="#f5440aff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#cfacacff',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, // Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});
