import React from "react";
import { View, Button } from "react-native";
import styles from "../styles";

export default function ActionButtonCardItem() {
    return (
    <View style={{ marginBottom: 10 }}>
      <Button styles={styles.button} title="Reservar | Solicitar" onPress={() => console.log('Reservar | Solicitar')} />
    </View>
    )
}