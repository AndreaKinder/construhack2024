import React, { useState, Children } from 'react';
import { Alert, Modal, Text, Pressable, View, ScrollView } from 'react-native';
import styles from '../styles';

export default function ViewDetailsButton({ children, text }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              {children}
            </ScrollView>
            <Pressable 
              style={[styles.button, {backgroundColor: 'red'}]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonText }>Close</Text>     
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

