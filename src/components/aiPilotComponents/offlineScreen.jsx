import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OfflineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla disponible solo con conexión al servidor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OfflineScreen;