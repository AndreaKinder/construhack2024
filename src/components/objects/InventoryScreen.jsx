import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '@/src/search/SearchBar';

const InventoryScreen = () => {
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInventory, setFilteredInventory] = useState([]);

  useEffect(() => {
    // Aquí debes cargar el inventario desde tu backend o base de datos
    setInventory([
      { id: 1, name: 'Elemento 1', description: 'Descripción del elemento 1' },
      { id: 2, name: 'Elemento 2', description: 'Descripción del elemento 2' },
      { id: 3, name: 'Elemento 3', description: 'Descripción del elemento 3' },
    ]);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredInventory = inventory.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredInventory(filteredInventory);
  };

  const renderItem = ({ item }) => (
    <View style={styles.inventoryItem}>
      <Text style={styles.inventoryItemName}>{item.name}</Text>
      <Text style={styles.inventoryItemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={handleSearch}
        containerStyle={styles.searchBar}
      />
      <FlatList
        data={filteredInventory.length > 0 ? filteredInventory : inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => console.log('Agregar elemento')}>
        <Ionicons name="ios-add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  inventoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inventoryItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inventoryItemDescription: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
});

export default InventoryScreen;