import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputField({ label, name, value, onChange }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput style={styles.input} placeholder={label} onChangeText={onChange} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    width: '20%',
    fontWeight: 'bold',
    color: '#444b6e',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
  },
});
