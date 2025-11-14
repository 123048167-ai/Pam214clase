import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>

      <Button 
        title="Ir a Profile"
        onPress={() => navigation.navigate('Profile', { user: 'Jafet' })}
      />

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
