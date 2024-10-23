import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { TextItemModal } from "../../TableItemModal";
import ViewModal from "../../../common/viewModal";

export default function QuantityAvailableDetallsTextItem({ item }) {
    return (
        <View>
          <ViewModal text={"Cantidad Disponible"}>
            <Text style={styles.name}>Cantidad Disponible</Text>
            <TextItemModal item='Volumen' dato={item.material.parametros_generales.cantidad_disponible.volumen.toString()} />
            <TextItemModal item='Peso' dato={item.material.parametros_generales.cantidad_disponible.peso.toString()} />
          </ViewModal>
        </View>
    );
}
        