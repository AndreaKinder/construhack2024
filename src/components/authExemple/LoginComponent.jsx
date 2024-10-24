import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import LoginForm from "./LoginForm";

const TitleLogin = () => (
    <Text style={styles.title}>Inicio Session</Text>
);

export default function LoginComponent() {
    return (
        <View style={styles.container}>
            <TitleLogin />
            <LoginForm /> 
        </View>
    );
}