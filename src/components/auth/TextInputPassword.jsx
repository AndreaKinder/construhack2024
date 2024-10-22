import React, {useState} from "react";
import {TextInput, View} from "react-native";
import styles from "../styles";

export default function TextInputPassword({password, setPassword}) {
    return (
        <View>
            <TextInput style={styles.input}
                placeholder='CONTRASEÑA'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize='none'
            />
        </View>
    );
}