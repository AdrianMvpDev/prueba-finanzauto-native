import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import { deleteUserData, fetchUserData } from '../../services/api';

export default function DeleteModal({ isVisible, onClose, item, onUserDeleted, setUserData }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      if (item && item.id) {
        await deleteUserData(item.id);

        const updatedData = await fetchUserData();

        if (onUserDeleted) {
          onUserDeleted(item.id);
        }
        if (setUserData) {
          setUserData(updatedData);
        }
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Eliminar Usuario</Text>
          <Text>¿Estás seguro de eliminar este usuario?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cancelar" onPress={onClose} />
            <Button title={isDeleting ? 'Eliminando...' : 'Eliminar'} onPress={handleDelete} disabled={isDeleting} />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
