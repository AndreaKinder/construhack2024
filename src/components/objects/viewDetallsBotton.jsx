import React from "react";
import { View, Text } from "react-native";
import ViewModal from "../common/viewModal";
import styles from "../styles";
import CompositionDetallsTextItem from "./DetallsTextItemsComponents/General/CompositionDetallsTextItem";
import GeneralDetallsTextItem from "./DetallsTextItemsComponents/General/GeneralDetallsTextItem";
import QuantityAvailableDetallsTextItem from "./DetallsTextItemsComponents/General/QuantityAvailableDetallsTextItem";

export default function DetallsTextItems({ item }) {
    return (
        <View style={styles.container}>
          <ViewModal  text={"Detalles"}>
            <GeneralDetallsTextItem item={item} />
            <CompositionDetallsTextItem item={item} />
            <QuantityAvailableDetallsTextItem item={item} />
          </ViewModal>
        </View>
    );
}
