import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function FilterInput({ filterTerm, setFilterTerm }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por ID o nombre"
        value={filterTerm}
        onChangeText={(text) => setFilterTerm(text)}
      />
      <Button title="Limpiar" color="#ff0000" onPress={() => setFilterTerm('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
