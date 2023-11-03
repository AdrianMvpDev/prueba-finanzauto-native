import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Paginator({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      {pageNumbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={[styles.pageButton, currentPage === number ? styles.activePage : styles.inactivePage]}
          onPress={() => onPageChange(number)}
        >
          <Text style={styles.pageText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  pageButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#1a6e6a',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activePage: {
    backgroundColor: '#1a6e6a',
  },
  inactivePage: {
    backgroundColor: 'transparent',
  },
  pageText: {
    color: 'white',
  },
});
