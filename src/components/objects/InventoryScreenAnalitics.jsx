import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalyticsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Materiales reutilizados: 100 kg</Text>
      <Text>Costes ahorrados: $1000</Text>
      <Text>CO2 ahorrado: 500 kg</Text>
      <Text>Otros datos relevantes: ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnalyticsTab;