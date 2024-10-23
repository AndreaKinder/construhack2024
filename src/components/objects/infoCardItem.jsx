import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function InfoCardItem({ nameItem, descriptionItem }) {
    return (
        <View style={styles.info}>
          <Text style={styles.name}>{nameItem}</Text>
          <Text style={styles.description}>{descriptionItem}</Text>
        </View>
    );
}