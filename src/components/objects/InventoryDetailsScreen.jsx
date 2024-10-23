import React from 'react';
import styles from '../styles';
import jsonItemsExemple from './data/exempleItems.json';
import CardItem from './cardItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function ItemDetailsScreen({ item }) {
  const exampleItems = [...jsonItemsExemple];
  return (
    <ScrollView style={styles.container}>
      {exampleItems.map((item, i) => <CardItem key={i} nameItem={item.name} descriptionItem={item.description} imageItem={item.image} />)}
    </ScrollView>    
  );
};

