import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Table from '../components/widgets/Table';
import { fetchUserData } from '../services/api';

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
  }, []);

  console.log(userData);

  return (
    <View>
      <View style={{ backgroundColor: '#fefffd' }}>
        <Table data={userData} setUserData={setUserData} />
      </View>
    </View>
  );
}
