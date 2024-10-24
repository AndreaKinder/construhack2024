import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { TextItemModal } from "../../TableItemModal";
import ViewModal from "../../../common/viewModal";

export default function CompositionDetallsTextItem({ item }) {
    return (
        <View>
          <ViewModal text={"Composicion"}>
            <Text style={styles.name}>Composicio</Text>
            <TextItemModal
              item="Elementos Quimicos"
              dato={item.material.parametros_generales.composicion.elementos_quimicos.join(", ")}
            />
            <TextItemModal
              item="Materiales Base"
              dato={item.material.parametros_generales.composicion.materiales_base.join(", ")}
            />
          </ViewModal>
        </View>
    );
}