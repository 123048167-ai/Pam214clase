import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Settings</Text>

      <Button 
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />

      <View style={{ height: 10 }} />

      <Button 
        title="Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 }
});
