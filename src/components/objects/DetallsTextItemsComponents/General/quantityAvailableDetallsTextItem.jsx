import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { TextItemModal } from "../../TableItemModal";

export default function QuantityAvailableDetallsTextItem({ item }) {
    return (
        <View>
          <Text style={styles.name}>Cantidad Disponible</Text>
          <TextItemModal item='Volumen' dato={item.material.parametros_generales.cantidad_disponible.volumen.toString()} />
          <TextItemModal item='Peso' dato={item.material.parametros_generales.cantidad_disponible.peso.toString()} />
        </View>
    );
}
        