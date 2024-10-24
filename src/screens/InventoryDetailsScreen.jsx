import React from 'react';
import styles from '../components/styles';
import jsonItemsExemple from '../components/objectsScreenExemple/data/exempleItems.json';
import CardItem from '../components/objectsScreenExemple/cardItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function ItemDetailsScreen() {
  const exampleItems = [...jsonItemsExemple];
  return (
    <ScrollView style={styles.container}>
      {exampleItems.map((item, i) => 
        <CardItem 
          key={i} 
          nameItem={item.material.parametros_generales.identificacion.nombre_comercial} 
          descriptionItem={item.material.parametros_generales.descripcion} 
          imageItem={item.material.parametros_generales.imagen}
          item={item}
         />
        )}
    </ScrollView>    
  );
};

