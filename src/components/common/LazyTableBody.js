import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import IconGroup from '../common/IconGroup';

export default function LazyTableBody({ data, onIconClick }) {
  return (
    <>
      {data.map((item) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.headerText}>Id</Text>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.headerText}>Nombres y Apellidos</Text>
            <Text>
              {item.title === 'miss' ? 'Sra' : item.title} {item.firstName} {item.lastName}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.headerText}>Foto</Text>
            <Image source={{ uri: item.picture }} style={styles.image} />
          </View>
          <View style={styles.cell}>
            <Text style={styles.headerText}>Acciones</Text>
            <IconGroup icons={['trash', 'pencil-sharp', 'reader']} onItemClick={(icon) => onIconClick(icon, item)} />
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#444b6e',
    borderRadius: 8,
    borderColor: 'gray',
    marginVertical: 2,
    padding: 3,
  },
  cell: {
    margin: 2,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#1a6e6a',
  },
  image: {
    maxWidth: 30,
    maxHeight: 30,
    width: 'auto',
    height: 'auto',
    borderRadius: 15,
  },
});
