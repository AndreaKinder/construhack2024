import { navigation } from '@react-navigation/native';
import { Alert } from 'react-native';
    
export function onLoginSuccess() {
    Alert.alert("Login successful")
    navigation.navigate("InventoryScreen");
}

export function onLoginError() {
    Alert.alert("Login failed")
}

