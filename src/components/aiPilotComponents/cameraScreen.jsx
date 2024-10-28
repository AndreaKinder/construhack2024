import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../styles';
import { uploadImage, addInventoryItem } from './api';

export default function CameraScreen() {
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);

  const takePictureHandler = async () => {
    try {
      if (cameraRef.current) {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
        const imageData = data.base64;
        await uploadImage(imageData);
        const itemData = {
          name: 'Nombre del elemento',
          image: imageData,
        };
        await addInventoryItem(itemData);
      }
    } catch (error) {
      console.error('Ha ocurrido un error al tomar la foto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
      >
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      </RNCamera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePictureHandler}>
          <Text style={styles.button}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
