import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const exampleItems = [
  {
    id: 1,
    name: 'Pala de obra',
    description: 'Pala de obra en buen estado, ideal para mover tierra y otros materiales.',
    image: 'https://th.bing.com/th/id/OIP.ZAWa2trM5ig_8NSpuwmLgAHaEE?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Rastrillo',
    description: 'Rastrillo perfecto para recoger hojas y otros materiales en el jard n.',
    image: 'https://th.bing.com/th/id/OIP.ZAWa2trM5ig_8NSpuwmLgAHaEE?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Carretilla',
    description: 'Carretilla para transportar materiales pesados con facilidad.',
    image: 'https://th.bing.com/th/id/OIP.ZAWa2trM5ig_8NSpuwmLgAHaEE?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'Manguera',
    description: 'Manguera para regar jardines y huertas.',
    image: 'https://th.bing.com/th/id/OIP.ZAWa2trM5ig_8NSpuwmLgAHaEE?rs=1&pid=ImgDetMain',
  },
  {
    id: 5,
    name: 'Sierra de podar',
    description: 'Sierra de podar para recortar ramas y plantas.',
    image: 'https://th.bing.com/th/id/OIP.ZAWa2trM5ig_8NSpuwmLgAHaEE?rs=1&pid=ImgDetMain',
  },
];

const ItemDetailsScreen = ({ item = exampleItems[0] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.actions}>
          <Button title="Reservar/Solicitar" onPress={() => console.log('Reservar/Solicitar')} />
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
  card: {
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
    padding: 10,
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default ItemDetailsScreen;

