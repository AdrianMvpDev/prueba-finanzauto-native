import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DeleteModal from './DeleteModal';
import { useNavigation } from '@react-navigation/native';

export default function Table({ data, setUserData }) {
  const navigation = useNavigation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleIconClick = (icon, item) => {
    if (icon === 'delete') {
      setSelectedItem(item);
      setIsDeleteModalOpen(true);
    }
  };

  const handleUserDeleted = (userId) => {
    if (data && data.data) {
      const updatedData = data.data.filter((user) => user.id !== userId);
      setUserData({ ...data, data: updatedData });
    }
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };

  if (!data) {
    return <ActivityIndicator size="large" color="#166D6B" />;
  }

  return (
    <View style={styles.container}>
      {data?.data.map((item) => (
        <React.Fragment key={item.id}>
          <View style={styles.tableRow}>
            <View
              style={{
                backgroundColor: '#CCE6E3',
                borderRadius: 26,
                position: 'absolute',
                top: 0,
                width: '100%',
                height: 117,
                left: 0,
              }}
            />
            <View style={{ flexDirection: 'row', gap: 20, flexWrap: 'wrap', padding: 10 }}>
              <View style={{ width: 140, height: 143, borderWidth: 1, borderColor: '#707070', borderRadius: 15 }}>
                <Image source={{ uri: item.picture }} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { userId: item?.id })} style={{ flex: 1 }}>
                <Text
                  style={{ color: '#166D6B', fontSize: 22, fontWeight: 'bold', marginBottom: 10, minHeight: 60 }}
                  ellipsizeMode="tail"
                  numberOfLines={2}
                >
                  {item.title === 'miss' ? 'Sra' : item.title} {item.firstName} {item.lastName}
                </Text>
                <Text
                  style={{ color: '#4E4E4E', fontSize: 11, fontWeight: 'bold', marginBottom: 36 }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  ID: {item.id}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#166D6B', fontSize: 14, fontWeight: 'bold' }}>Ver Detalle</Text>
                  <TouchableOpacity onPress={() => handleIconClick('delete', item)}>
                    <Ionicons name="trash" size={18} color="#F00000" style={{ marginRight: 8 }} />
                  </TouchableOpacity>
                  <Ionicons name="chevron-forward" size={18} color="#166D6B" style={{ marginRight: 8 }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </React.Fragment>
      ))}
      <Modal transparent={true} visible={isDeleteModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <DeleteModal
            isVisible={isDeleteModalOpen}
            onClose={closeModal}
            item={selectedItem}
            setUserData={setUserData}
            onUserDeleted={handleUserDeleted}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    display: 'flex',
    gap: 20,
    marginBottom: 40,
  },
  tableRow: {
    borderRadius: 26,
    backgroundColor: '#EFEFEF',
    position: 'relative',
    height: 163,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
