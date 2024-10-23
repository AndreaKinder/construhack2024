import React from 'react';
import { View } from 'react-native';
import { ViewModal, TextItemModal } from '../common';
import styles from '../../styles';

export default function GeneralDetallsTextItem({ item }) {
    const { parametros_reutilizacion } = item.material;
    return (
      <View>
        <ViewModal text={"Reutilización"}>
          <Text style={styles.name}>Parámetros de Reutilización</Text>
          <TextItemModal item='Capacidad de Reutilización Directa' dato={parametros_reutilizacion.capacidad_reutilizacion_directa ? 'Sí' : 'No'} />
          <TextItemModal item='Capacidad de Reciclaje' dato={parametros_reutilizacion.capacidad_reciclaje ? 'Sí' : 'No'} />
          <TextItemModal item='Compatibilidad con otros Materiales' dato={parametros_reutilizacion.compatibilidad_otros_materiales.join(', ')} />
          <TextItemModal item='Vida Útil Estimada' dato={parametros_reutilizacion.vida_util_estimada} />
          <TextItemModal item='Tratamientos Necesarios' dato={parametros_reutilizacion.tratamientos_necesarios.join(', ')} />
          <TextItemModal item='Aplicaciones Potenciales' dato={parametros_reutilizacion.aplicaciones_potenciales.join(', ')} />
        </ViewModal>
      </View>
    );
  }
