import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PilotScreen from '../components/aiPilotComponents/pilotScreen';
import OfflineScreen from '../components/aiPilotComponents/offlineScreen';
import { getInventory } from '../components/aiPilotComponents/api';

const PilotApp = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [networkError, setNetworkError] = useState(null);

  useEffect(() => {
    setIsConnected(false);
  }, []);

  const handleReconnect = async () => {
    try {
      const inventory = await getInventory();
      if (inventory) setIsConnected(true);
      setNetworkError(null);
    } catch (error) {
      if (error.message.includes('Network Error')) {
        setIsConnected(false);
        setNetworkError('No hay conexión a Internet');
      } else {
        console.error(error);
      }
    }
  };

  return (
    networkError ? (
      <View>
        <Text>{networkError}</Text>
        <TouchableOpacity onPress={handleReconnect}>
          <Text>Reconectar</Text>
        </TouchableOpacity>
      </View>
    ) : (
      isConnected ? (
        <PilotScreen />
      ) : (
        <OfflineScreen />
      )
    )
  );
};
export default PilotApp;