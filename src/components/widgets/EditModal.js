import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native';
import { updateUserData } from '../../services/api';

export default function EditModal({ isVisible, onClose, item, setUserData }) {
  const [editedItem, setEditedItem] = useState(item || {});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (item) {
      setEditedItem(item);
    }
  }, [item]);

  const handleFieldChange = useCallback(
    (name, value) => {
      setEditedItem({
        ...editedItem,
        [name]: value,
      });
    },
    [editedItem]
  );

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      await updateUserData(editedItem.id, editedItem);
      const refreshedData = await fetchUserData();
      setIsSaving(false);
      onClose();
      setUserData(refreshedData);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      setIsSaving(false);
      onClose();
    }
  }, [editedItem, onClose, setUserData]);

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={editedItem.title}
            onChangeText={(text) => handleFieldChange('title', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombres"
            value={editedItem.firstName}
            onChangeText={(text) => handleFieldChange('firstName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            value={editedItem.lastName}
            onChangeText={(text) => handleFieldChange('lastName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Foto"
            value={editedItem.picture}
            onChangeText={(text) => handleFieldChange('picture', text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancelar" onPress={onClose} />
            <Button title={isSaving ? 'Guardando...' : 'Guardar'} onPress={handleSave} disabled={isSaving} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
