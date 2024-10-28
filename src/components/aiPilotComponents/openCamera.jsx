import { useState } from 'react';
import { Modal } from 'react-native';
import CameraScreen from './cameraScreen';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

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
      <Modal
        visible={isCameraOpen}
        onRequestClose={handleCloseCamera}
      >
        <CameraScreen
          onAddItem={handleAddItem}
          onClose={handleCloseCamera}
        />
      </Modal>
      <TouchableOpacity onPress={handleTakePhoto}>
          <Text style={styles.button}>Tomar foto</Text>
        </TouchableOpacity>
    </View>
  );
};

export { OpenCamera};
