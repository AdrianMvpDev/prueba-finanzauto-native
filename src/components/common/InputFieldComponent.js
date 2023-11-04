import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function InputFieldComponent({
  value,
  onChangeText,
  onFocus,
  onBlur,
  secureTextEntry,
  autoComplete,
  editable,
  rightIcon,
  onRightIconPress,
  keyboardType,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        onFocus={onFocus}
        onBlur={onBlur}
        blurOnSubmit
        secureTextEntry={secureTextEntry}
        cursorColor={'#0e89f7'}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIconContainer}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dae0e2',
    borderRadius: 7,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: '#081f46',
    padding: 15,
  },
  rightIconContainer: {
    padding: 10,
  },
});
