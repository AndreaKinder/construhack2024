import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalyticsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analisis de datos</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Materiales reutilizados</Text>
          <Text style={styles.tableCell}>100 kg</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Costes ahorrados</Text>
          <Text style={styles.tableCell}>$1000</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>CO2 ahorrado</Text>
          <Text style={styles.tableCell}>500 kg</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Otros datos relevantes</Text>
          <Text style={styles.tableCell}>...</Text>
        </View>
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  tableCell: {
    fontSize: 16,
  },
});




export default AnalyticsTab;