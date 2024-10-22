import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, value, onChangeText, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;