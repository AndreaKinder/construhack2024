/**
 * Pantalla de inventario
 * 
 * Esta pantalla muestra una lista de elementos con sus respectivas imagenes y nombres.
 * Permite buscar un elemento en la lista mediante un input de texto.
 * Permite tomar una foto y agregarla a la lista.
 * Permite ver los detalles de un elemento seleccionado.
 * 
 * @returns {React.ReactElement} Pantalla de inventario
 */

import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '@/src/components/search/SearchBar';
//import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const InventoryScreen = () => {
  const [inventory, setInventory] = useState([]); // estado para guardar la lista de elementos
  const [searchQuery, setSearchQuery] = useState(''); // estado para guardar el texto de búsqueda
  const [filteredInventory, setFilteredInventory] = useState([]); // estado para guardar la lista de elementos filtrados
  const [selectedItem, setSelectedItem] = useState(null); // estado para guardar el elemento seleccionado
  const [cameraPermission, setCameraPermission] = useState(null); // permiso para acceder a la cámara
  const [cameraRef, setCameraRef] = useState(null); // referencia a la cámara
  const [isCameraOpen, setIsCameraOpen] = useState(false); // bandera para indicar si la cámara está abierta

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredInventory = inventory.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredInventory(filteredInventory);
  };

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      handleAddItem(photo.uri);
    }
    setIsCameraOpen(false);
  };

  const handleAddItem = async (uri) => {
    try {
      // Aquí deberías hacer la petición al servidor para subir la imagen
      // y obtener la forma del objeto
      const response = await fetch('http://tu-servidor.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: uri }),
      });
      const data = await response.json();
      const newItem = {
        id: inventory.length + 1,
        name: 'Nuevo Elemento',
        description: 'Descripción del nuevo elemento',
        shape: data.shape,
        image: uri,
      };
      setInventory([...inventory, newItem]);
      setSelectedItem(newItem);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.inventoryItem, { borderRadius: item.shape === 'circle' ? 50 : 0 }]}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => setIsCameraOpen(true)}>
        <Ionicons name="ios-camera" size={32} color="green" />
      </TouchableOpacity>
    </View>
  );

  const SelectedItemScreen = () => {
    const { name, description, image } = selectedItem;
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {isCameraOpen ? (
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={(ref) => setCameraRef(ref)}>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}>
            <Button title="Tomar Foto" onPress={handleTakePhoto} />
          </View>
        </Camera>
      ) : (
        <FlatList
          data={filteredInventory.length > 0 ? filteredInventory : inventory}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {selectedItem && <SelectedItemScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventoryItem: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default InventoryScreen;
