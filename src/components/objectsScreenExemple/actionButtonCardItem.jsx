import React from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import styles from "../styles";

const ActionButtonCardItem = () => {
  const handlePress = () =>
    Alert.alert(
      "Item Reservado",
      "El item ha sido reservado correctamente.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Reservar | Solicitar</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ActionButtonCardItem;

