import React from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import styles from '../styles';

export const TextItemModal = ({item, dato}) => {
  return (
    <View style={styles.containerTable}>
      <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
        <Rows data={[[item, dato]]} style={styles.textTable}/>
      </Table>
    </View>
  )
}


