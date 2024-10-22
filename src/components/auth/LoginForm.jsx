import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles";
import TextInputUsername from "./TextInputUsername";
import TextInputPassword from "./TextInputPassword";
import LoginButton from "./LoginButton";


export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.inputView}>
            <TextInputUsername username={username} setUsername={setUsername} />
            <TextInputPassword  password={password} setPassword={setPassword}/>
            <LoginButton username={username} password={password} />
        </View>
    );
};