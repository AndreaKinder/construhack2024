import React from "react";
import { View, Image } from "react-native";
import styles from "../styles";
import InfoCardItem from "./infoCardItem";
import ActionButtonCardItem from "./actionButtonCardItem";
import ViewDetailsButton from "./viewDetailsModal";

export default function CardItem({ nameItem, descriptionItem, imageItem, item }) {
    return (
        <View style={styles.containerItem}>
            <Image source={{ uri: imageItem }} style={styles.imageItem} />
            <InfoCardItem nameItem={nameItem} descriptionItem={descriptionItem} />
            <ViewDetailsButton item={item}/>
            <ActionButtonCardItem />
        </View>
    );
}
