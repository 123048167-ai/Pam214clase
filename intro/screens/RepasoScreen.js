import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Switch,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function RepasoScreen({ volver }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const registrarUsuario = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) {
      Alert.alert("Campo requerido", "Por favor ingresa tu nombre completo.");
      return;
    }

    if (!correo.trim()) {
      Alert.alert("Campo requerido", "Por favor ingresa tu correo electrónico.");
      return;
    }

    if (!emailRegex.test(correo)) {
      Alert.alert("Correo inválido", "El formato del correo no es válido. Ejemplo: usuario@correo.com");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Términos no aceptados", "Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    Alert.alert("Registro exitoso", `✅ Registro completado\n\n👤 Nombre: ${nombre}\n📧 Correo: ${correo}`);

    setNombre("");
    setCorreo("");
    setAceptaTerminos(false);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://store-images.s-microsoft.com/image/apps.52315.68607194681373551.b4c09a44-be36-42d6-96c5-4a33b566becd.9199c63b-06f1-41b5-8118-c1d2373ee86a?q=90&w=480&h=270",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
            placeholderTextColor="#ccc"
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            placeholderTextColor="#ccc"
          />

          <View style={styles.switchContainer}>
            <Text style={styles.textoSwitch}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              trackColor={{ true: "green", false: "gray" }}
            />
          </View>

          <TouchableOpacity style={styles.boton} onPress={registrarUsuario}>
            <Text style={styles.botonTexto}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.boton, { backgroundColor: "#888" }]} onPress={volver}>
            <Text style={styles.botonTexto}>Volver al menú</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formulario: {
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "white",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textoSwitch: { color: "white", fontSize: 14 },
  boton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 16 },
});

