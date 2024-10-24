import React from 'react';
import { View, Text } from 'react-native';
import ViewModal from '../../../common/viewModal';
import styles from '../../../styles';
import { TextItemModal } from "../../TableItemModal";

export default function GeneralDetallsTextItem({ item }) {
    return (
      <View>
        <ViewModal text={"Propiedades Físicas"}>
          <Text style={styles.name}>Propiedades Físicas</Text>
          <TextItemModal item='Densidad' dato={item.material.parametros_seguridad.propiedades_fisicas.densidad.toString()} />
          <TextItemModal item='Punto de Fusión' dato={item.material.parametros_seguridad.propiedades_fisicas.punto_fusion.toString()} />
          <TextItemModal item='Solubilidad' dato={item.material.parametros_seguridad.propiedades_fisicas.solubilidad.toString()} />
        </ViewModal>
      </View>
    );
  }
