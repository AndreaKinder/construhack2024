import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InventoryScreen from '../src/components/objects/InventoryScreen';
import LoginScreen from '../src/components/auth/LoginScreen';

const Drawer = createDrawerNavigator();

function Navigations() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Home" component={InventoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;

