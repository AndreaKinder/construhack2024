import React from "react";
import { View, Button } from "react-native";
import styles from "../styles";

export default function ActionButtonCardItem() {
    return (
        <View style={styles.actions}>
          <Button title="Reservar | Solicitar" onPress={() => console.log('Reservar | Solicitar')} />
        </View>
    )
}