import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Modal } from 'react-native';
import InfoModal from './InfoModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import Paginator from './Paginator';
import FilterInput from '../common/FilterInput';

export default function Table({ data, setUserData }) {
  const [filterTerm, setFilterTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    data && data.data
      ? data.data.filter((item) =>
          `${item.id} ${item.title} ${item.firstName} ${item.lastName}`.toLowerCase().includes(filterTerm.toLowerCase())
        )
      : [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleIconClick = (icon, item) => {
    if (icon === 'edit') {
      setSelectedItem(item);
      setIsEditModalOpen(true);
    } else if (icon === 'delete') {
      setSelectedItem(item);
      setIsDeleteModalOpen(true);
    } else if (icon === 'info') {
      setSelectedItem(item);
      setIsInfoModalOpen(true);
    }
  };

  const handleUserDeleted = (userId) => {
    if (data && data.data) {
      const updatedData = data.data.filter((user) => user.id !== userId);
      setUserData({ ...data, data: updatedData });
    }
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsInfoModalOpen(false);
  };

  if (!data) {
    return <Text>Cargando...</Text>;
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <View style={styles.container}>
      <FilterInput filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <FlatList
        data={itemsToShow}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text>Id: {item.id}</Text>
            <Text>Titulo: {item.title === 'miss' ? 'Sra' : item.title}</Text>
            <Text>Nombres: {item.firstName}</Text>
            <Text>Apellidos: {item.lastName}</Text>
            <Text>Foto: {item.picture}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Editar" onPress={() => handleIconClick('edit', item)} />
              <Button title="Eliminar" onPress={() => handleIconClick('delete', item)} />
              <Button title="Info" onPress={() => handleIconClick('info', item)} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      <Modal transparent={true} visible={isEditModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <EditModal isVisible={isEditModalOpen} onClose={closeModal} item={selectedItem} setUserData={setUserData} />
        </View>
      </Modal>
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
      <Modal transparent={true} visible={isInfoModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <InfoModal isVisible={isInfoModalOpen} onClose={closeModal} item={selectedItem} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  tableRow: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
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
