import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';
import { ViewModal, TextItemModal } from '../../common';

export default function DetallesEconomiaCircularTextItem({ item }) {
    const { parametros_economia_circular } = item.material;
    return (
      <View>
        <ViewModal text={"Economía Circular"}>
          <Text style={styles.name}>Parámetros de Economía Circular</Text>
          <TextItemModal item='Huella de Carbono' dato={parametros_economia_circular.huella_carbono.toString()} />
          <TextItemModal item='Costo de Gestión' dato={`Recolección: ${parametros_economia_circular.costo_gestion.recoleccion}, Tratamiento: ${parametros_economia_circular.costo_gestion.tratamiento}, Disposición Final: ${parametros_economia_circular.costo_gestion.disposicion_final}`} />
          <TextItemModal item='Valor Económico' dato={parametros_economia_circular.valor_economico.toString()} />
        </ViewModal>
      </View>
    );
  }
