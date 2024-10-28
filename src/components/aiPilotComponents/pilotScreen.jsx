import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import CameraScreen from './cameraScreen';
import SearchBar from '@/src/components/search/SearchBar';
import handleSearch from './handleSeach';
import handleAddItem from './handleInventory';
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