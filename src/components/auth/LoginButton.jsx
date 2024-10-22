import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../styles";
import login from "./scripts/LoginScript";
import { onLoginSuccess, onLoginError } from "./scripts/onLoginFunctions";

export default ({ username, password }) => (
  <Pressable style={styles.button} onPress={() => login(username, password) ? onLoginSuccess() : onLoginError()}>
    <Text style={styles.buttonText}>LOGIN</Text>
  </Pressable>
);
