import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InventoryScreen from '../src/components/objects/InventoryScreen';
import LoginScreen from '../src/screens/LoginScreen';
import InventoryDetailsScreen from '../src/screens/InventoryDetailsScreen';

const Drawer = createDrawerNavigator();

function Navigations() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Inicio de Session">
                <Drawer.Screen name="Inicio de Session" component={LoginScreen} />
                <Drawer.Screen name="Prueva piloto funcional" component={InventoryScreen} />
                <Drawer.Screen name="Interfaz de Ejemplo" component={InventoryDetailsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;
