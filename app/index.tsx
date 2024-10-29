import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../src/screens/LoginScreen';
import InventoryDetailsScreen from '../src/screens/InventoryDetailsScreen';
import PilotApp from '@/src/screens/PilotAppScreen';

const Drawer = createDrawerNavigator();

export default function Navigations() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Inicio de Session">
                <Drawer.Screen name="Inicio de Session" component={LoginScreen} />
                <Drawer.Screen name="Prueba piloto servidor" component={PilotApp} />
                <Drawer.Screen name="Interfaz de Ejemplo" component={InventoryDetailsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
