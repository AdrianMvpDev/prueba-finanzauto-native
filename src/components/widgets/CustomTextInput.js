import React from 'react';
import { Text, View } from 'react-native';
import InputFieldComponent from '../common/InputFieldComponent';
import LabelComponent from '../common/LabelComponent';

export default function CustomTextInput(props) {
  const {
    label,
    value,
    onChangeText,
    onFocus,
    onBlur,
    keyboardType,
    secureTextEntry,
    moveText,
    autoComplete,
    editable,
    rightIcon,
    onRightIconPress,
    error,
  } = props;

  return (
    <View style={{ position: 'relative' }}>
      <LabelComponent text={label} value={value} />
      <InputFieldComponent
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        moveText={moveText}
        autoComplete={autoComplete}
        rightIcon={rightIcon}
        onRightIconPress={onRightIconPress}
        editable={editable}
      />
      {error ? <Text style={{ color: '#f95f5f', fontSize: 11 }}>{error}</Text> : null}
    </View>
  );
}
