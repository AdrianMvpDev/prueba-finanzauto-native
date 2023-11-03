import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

export default function SelectField({ label, value, onChange }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <Picker style={styles.input} selectedValue={value} onValueChange={(itemValue) => onChange(itemValue)}>
        <Picker.Item label="Miss" value="miss" />
        <Picker.Item label="Ms" value="ms" />
        <Picker.Item label="Mr" value="mr" />
        <Picker.Item label="Mrs" value="mrs" />
        <Picker.Item label="Dr" value="dr" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: '20%',
    fontWeight: 'bold',
    color: '#444b6e',
  },
  input: {
    flex: 1,
  },
});
