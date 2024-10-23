import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import GeneralDetallsTextItem from "./General/GeneralDetallsTextItem";
import CompositionDetallsTextItem from "./General/CompositionDetallsTextItem";
import QuantityAvailableDetallsTextItem from "./General/quantityAvailableDetallsTextItem";

export default function GeneralModalTextItem({item}) {
  return (
    <View style={styles.containerTable}>
      <GeneralDetallsTextItem item={item} />
      <CompositionDetallsTextItem item={item} />
      <QuantityAvailableDetallsTextItem item={item} />
    </View>
  );
}
