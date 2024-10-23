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
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Inventory" component={InventoryScreen} />
                <Drawer.Screen name="InventoryDetails" component={InventoryDetailsScreen} options={{ unmountOnBlur: true }} initialParams={{ item: {} as any }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;
