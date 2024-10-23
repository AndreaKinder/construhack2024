import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { TextItemModal } from "./TableItemModal";

export default function GeneralDetallsTextItem({ item }) {
    return (
        <View style={styles.generalDetalls}>
          <Text style={styles.name}>Parametros Generales</Text>
          <TextItemModal item='Nombre' dato={item.material.parametros_generales.identificacion.nombre_comercial} />
          <TextItemModal item='Origen' dato={item.material.parametros_generales.origen} />
          <TextItemModal item='Estado' dato={item.material.parametros_generales.estado} />
          <TextItemModal item='Descripción' dato={item.material.parametros_generales.descripcion} />
          <TextItemModal item='Volumen' dato={item.material.parametros_generales.cantidad_disponible.volumen.toString()} />
          <TextItemModal item='Peso' dato={item.material.parametros_generales.cantidad_disponible.peso.toString()} />
        </View>
    );
}
