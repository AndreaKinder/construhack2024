import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text } from 'react-native';
import CameraScreen from './cameraScreen';
import { View } from 'react-native-reanimated';
import { handleAddItem } from './api';

const OpenCamera = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleTakePhoto = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleTakePhoto}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, backgroundColor: 'gray', color: 'white' }}>Tomar foto</Text>
      </TouchableOpacity>
      <Modal
        visible={isCameraOpen}
        onRequestClose={handleCloseCamera}
      >
        <CameraScreen
          onAddItem={handleAddItem}
          onClose={handleCloseCamera}
        />
      </Modal>
    </View>
  );
};

export { OpenCamera };