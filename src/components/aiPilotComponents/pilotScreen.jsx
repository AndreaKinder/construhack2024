import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles';
import SearchBar from '@/src/components/search/SearchBar';
import { searchQuery, filteredInventory, handleSearch } from './handleSeach';
import { OpenCamera } from './openCamera';

const PilotScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar elemento"
        value={searchQuery}
        onChangeText={handleSearch}
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