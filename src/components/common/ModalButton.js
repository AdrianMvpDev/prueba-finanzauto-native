import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function ModalButtons({ onCancel, onSave, isSaving, textButton, textButton2 }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Cancelar" onPress={onCancel} color="#4ed964" accessibilityLabel="Cancelar" />
      <Button
        title={isSaving ? textButton2 : textButton}
        onPress={onSave}
        color="#4ed964"
        disabled={isSaving}
        accessibilityLabel="Guardar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: 'gray',
  },
});
