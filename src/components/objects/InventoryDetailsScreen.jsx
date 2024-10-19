import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const exampleItems = [
  {
    id: 1,
    name: 'Pala de obra',
    description: 'Pala de obra en buen estado, ideal para mover tierra y otros materiales.',
    image: 'https://i.ibb.co/7FVrFRF/pala-de-obra.jpg',
  },
  {
    id: 2,
    name: 'Rastrillo',
    description: 'Rastrillo perfecto para recoger hojas y otros materiales en el jard n.',
    image: 'https://i.ibb.co/6ZVHqZ8/rastrillo.jpg',
  },
  {
    id: 3,
    name: 'Carretilla',
    description: 'Carretilla para transportar materiales pesados con facilidad.',
    image: 'https://i.ibb.co/Mf2MmCv/carretilla.jpg',
  },
  {
    id: 4,
    name: 'Manguera',
    description: 'Manguera para regar jardines y huertas.',
    image: 'https://i.ibb.co/6tFLX2t/manguera.jpg',
  },
  {
    id: 5,
    name: 'Sierra de podar',
    description: 'Sierra de podar para recortar ramas y plantas.',
    image: 'https://i.ibb.co/Mf2MmCv/sierra-de-podar.jpg',
  },
];

const ItemDetailsScreen = ({ item = exampleItems[0] }) => {
  return (
    <View style={styles.container}>
      <Text>Información detallada del elemento:</Text>
      <Text>Nombre: {item.name}</Text>
      <Text>Descripción: {item.description}</Text>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Button title="Reservar/Solicitar" onPress={() => console.log('Reservar/Solicitar')} />
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

export default ItemDetailsScreen;
