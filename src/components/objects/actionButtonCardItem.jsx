import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles";

export default function ActionButtonCardItem() {
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Reservar | Solicitar")}
      >
        <Text style={styles.buttonText}>Reservar | Solicitar</Text>
      </TouchableOpacity>
    </View>
  );
}
