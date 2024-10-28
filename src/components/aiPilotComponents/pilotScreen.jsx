import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import { addInventoryItem } from './api';
import CameraScreen from './cameraScreen';
import SearchBar from '@/src/components/search/SearchBar';

const PilotScreen = () => {
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleAddItem = async (itemData) => {
    try {
      await addInventoryItem(itemData);
      setInventory([...inventory, itemData]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredItems = inventory.filter((item) => item.name.includes(query));
    setFilteredInventory(filteredItems);
  };

  const handleTakePhoto = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };

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
      <TouchableOpacity onPress={handleTakePhoto}>
        <Text style={styles.button}>Tomar foto</Text>
      </TouchableOpacity>
      <Modal
        visible={isCameraOpen}
        onRequestClose={handleCloseCamera}
      >
        <CameraScreen
          onAddItem={handleAddItem}
          onClose={handleCloseCamera}
        />
      </Modal>
    </View>
  );
};

export default PilotScreen;