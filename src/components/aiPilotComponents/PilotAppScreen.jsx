import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PilotScreen from './pilotScreen';
import OfflineScreen from './offlineScreen';
import { getInventory } from './api';

const PilotApp = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await getInventory();
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    };
    checkConnection();
  }, []);

  return (
    <View>
      {isConnected ? <PilotScreen /> : <OfflineScreen />}
    </View>
  );
};

export default PilotApp;