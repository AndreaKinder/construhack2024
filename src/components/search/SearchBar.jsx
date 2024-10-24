import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles';

export default function SearchBar ({ placeholder, value, onChangeText, style }) {

  return (
      <TextInput
        style={[styles.searchInput, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
  )
}
  // TODO: Implementar los siguientes componentes
  // - SearchBarIcon (Icono de lupa)
  // - SearchBarClear (Bot n de limpiar el input)
  // - SearchBarResults (Lista de resultados de la bsqueda)
