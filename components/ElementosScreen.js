import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ElementosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>🔥 Fogo</Text>
      <Text style={styles.item}>💧 Água</Text>
      <Text style={styles.item}>🌬️ Ar</Text>
      <Text style={styles.item}>🌱 Terra</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  item: { fontSize: 20 },
});
