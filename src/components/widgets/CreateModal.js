import { View, Text, Modal, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function CreateModal({ isVisible, onClose }) {
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ padding: 30, backgroundColor: '#F9FBFB', borderRadius: 20, marginBottom: 30 }}>
            <Text style={styles.modalTitle}>Novedad</Text>
            <Text style={{ color: '#166D6B', fontSize: 43, fontWeight: 'bold' }}>Creado</Text>
          </View>
          <Text style={{ color: '#4E4E4E', fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
            Usuario creado de manera correcta
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
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
              <Text style={{ color: '#FFFFFF', fontSize: 16 }} onPress={onClose}>
                Aceptar
              </Text>
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
