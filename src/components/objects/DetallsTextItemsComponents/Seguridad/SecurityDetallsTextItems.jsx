import React from 'react';
import { View, Text } from 'react-native';
import ViewModal from '../../../common/viewModal';
import styles from '../../../styles';
import { TextItemModal } from "../../TableItemModal";

export default function GeneralDetallsTextItem({ item }) {
    return (
      <View>
        <ViewModal text={"Seguridad"}>
          <Text style={styles.name}>Parámetros de Seguridad</Text>
          <TextItemModal item='Toxicidad' dato={item.material.parametros_seguridad.toxicidad} />
          <TextItemModal item='Riesgos Físicos' dato={item.material.parametros_seguridad.riesgos_fisicos.join(', ')} />
          <TextItemModal item='Riesgos Químicos' dato={item.material.parametros_seguridad.riesgos_quimicos.join(', ')} />
          <TextItemModal item='Riesgos Biológicos' dato={item.material.parametros_seguridad.riesgos_biologicos.join(', ')} />
        </ViewModal>
      </View>
    );
  }
