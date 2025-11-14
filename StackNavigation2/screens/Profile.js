import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile({ navigation, route }) {
  const { user } = route.params || { user: 'Invitado' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Profile</Text>
      <Text style={{ marginBottom: 20 }}>Usuario: {user}</Text>

      <Button title="Regresar" onPress={() => navigation.goBack()} />

      <View style={{ height: 10 }} />

      <Button 
        title="Ir a Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 }
});
