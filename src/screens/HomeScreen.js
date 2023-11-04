import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Table from '../components/widgets/Table';
import { fetchUserData } from '../services/api';
import Header from '../components/layout/Header';

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setUserData(userData);
      } catch (error) {
        console.error('Error al obtener los datos de usuario:', error);
      }
    };

    fetchData();
  }, [userData]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FBFB' }} showsVerticalScrollIndicator={false}>
      <Header />
      <Text style={{ color: '#4E4E4E', fontSize: 30, fontWeight: 'bold', maxWidth: 362, padding: 30 }}>
        Consulta y Registro de Usuarios
      </Text>
      <View>
        <Table data={userData} setUserData={setUserData} />
      </View>
    </ScrollView>
  );
}
