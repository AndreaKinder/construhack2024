import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { TextItemModal } from "../../TableItemModal";

export default function CompositionDetallsTextItem({ item }) {
    return (
        <View>
          <Text style={styles.name}>Composicion</Text>
          <TextItemModal item='Elementos Quimicos' dato={item.material.parametros_generales.composicion.elementos_quimicos.join(', ')} />
          <TextItemModal item='Materiales Base' dato={item.material.parametros_generales.composicion.materiales_base.join(', ')} />
        </View>
    );
}