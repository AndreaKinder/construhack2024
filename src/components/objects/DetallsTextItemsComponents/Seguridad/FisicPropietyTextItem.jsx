import React from 'react';
import { View } from 'react-native';
import { ViewModal, TextItemModal } from '../common';
import styles from '../../../styles';

export default function GeneralDetallsTextItem({ item }) {
    return (
      <View>
        <ViewModal text={"Seguridad"}>
            <Text style={styles.name}>Propiedades Físicas</Text>
            <TextItemModal item='Densidad' dato={parametros_seguridad.propiedades_fisicas.densidad.toString()} />
            <TextItemModal item='Punto de Fusión' dato={parametros_seguridad.propiedades_fisicas.punto_fusion.toString()} />
            <TextItemModal item='Solubilidad' dato={parametros_seguridad.propiedades_fisicas.solubilidad.toString()} />
        </ViewModal>
      </View>
    );
  }
