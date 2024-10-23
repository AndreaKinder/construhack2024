import React from "react";
import { View, Image } from "react-native";
import styles from "../styles";
import InfoCardItem from "./infoCardItem";
import ActionButtonCardItem from "./actionButtonCardItem";

export default function CardItem({ nameItem, descriptionItem, imageItem }) {
    return (
        <View style={styles.containerItem}>
            <Image source={{ uri: imageItem }} style={styles.imageItem} />
            <InfoCardItem nameItem={nameItem} descriptionItem={descriptionItem} />
            <ActionButtonCardItem />
        </View>
    );
}
