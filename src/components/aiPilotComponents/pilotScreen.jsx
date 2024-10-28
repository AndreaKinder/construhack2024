import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles';
import SearchBar from '@/src/components/search/SearchBar';
import { OpenCamera } from './openCamera';

const PilotScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInventory, setFilteredInventory] = useState([]);

  const handleSearch = (query, inventory) => {
    setSearchQuery(query);
    const filteredItems = inventory.filter((item) => item.name.includes(query));
    setFilteredInventory(filteredItems);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar elemento"
        value={searchQuery}
        onChangeText={(query) => handleSearch(query, inventory)}
      />
      <FlatList
        data={filteredInventory}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <OpenCamera />
    </View>
  );
};

export default PilotScreen;