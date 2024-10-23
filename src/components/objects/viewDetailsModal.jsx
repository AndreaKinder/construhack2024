import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, ScrollView} from 'react-native';
import styles from '../styles';
import GeneralModalTextItem from './DetallsTextItemsComponents/GeneralModalTextItem';

export default function ViewDetailsButton({item}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <GeneralModalTextItem item={item} />
            </ScrollView>
            <Pressable 
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Ver Detalles</Text>
      </Pressable>
    </View>
  );
}