import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

function InfoModalContent({ item, onClose }) {
  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Información del Usuario</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Id:</Text>
        <Text style={styles.infoValue}>{item.id}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Titulo:</Text>
        <Text style={styles.infoValue}>{item.title === 'miss' ? 'Sra' : item.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Nombres:</Text>
        <Text style={styles.infoValue}>{item.firstName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Apellidos:</Text>
        <Text style={styles.infoValue}>{item.lastName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Foto:</Text>
        <Text style={styles.infoValue}>{item.picture}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cerrar" onPress={onClose} color="#4ed964" />
      </View>
    </View>
  );
}

function InfoModal({ isVisible, onClose, item }) {
  if (!item) {
    return null;
  }

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <InfoModalContent item={item} onClose={onClose} />
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
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default InfoModal;
