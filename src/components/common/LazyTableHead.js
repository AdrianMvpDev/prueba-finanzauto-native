import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LazyTableHead() {
  return (
    <View style={styles.row}>
      <Text style={styles.headerCell}>Id</Text>
      <Text style={styles.headerCell}>Nombres y Apellidos</Text>
      <Text style={styles.headerCell}>Foto</Text>
      <Text style={styles.headerCell}>Acciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a6e6a',
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 8,
  },
  headerCell: {
    color: '#fefffd',
    flex: 1,
    textAlign: 'center',
  },
});
