import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { deleteUserData, fetchUserData } from '../../services/api';
import { Feather } from '@expo/vector-icons';

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
          <View style={{ padding: 30, backgroundColor: '#F9FBFB', borderRadius: 20, marginBottom: 30 }}>
            <Text style={styles.modalTitle}>Novedad</Text>
            <Text style={{ color: '#166D6B', fontSize: 43, fontWeight: 'bold' }}>Eliminar</Text>
          </View>
          <Text style={{ color: '#4E4E4E', fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
            ¿Está seguro que desea eliminar el registro?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleDelete}
              disabled={isDeleting}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 222,
                height: 50,
                backgroundColor: '#A2D033',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
                gap: 8,
              }}
            >
              <Feather name="check" size={19} color={'#FFFFFF'} />
              <Text style={{ color: '#FFFFFF', fontSize: 16 }} onPress={handleDelete}>
                {isDeleting ? 'Eliminando...' : 'Aceptar'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 222,
                height: 50,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                gap: 8,
              }}
              onPress={onClose}
            >
              <Feather name="x" size={19} color={'#A1A2A1'} />
              <Text style={{ color: '#A1A2A1', fontSize: 16 }}>Cancelar</Text>
            </TouchableOpacity>
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
    backgroundColor: '#166D6B',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '86%',
    padding: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    color: '#A2D033',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 17,
  },
});
