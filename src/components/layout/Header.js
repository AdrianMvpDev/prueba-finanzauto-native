import { View, Image, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View>
      <View style={{ backgroundColor: '#FFFFFF', height: 96, width: '100%', paddingLeft: 41, padding: 30 }}>
        <Image source={require('../assets/logo.png')} style={{ width: 278, height: 34 }} />
      </View>
      <View
        style={{ backgroundColor: '#166D6B', height: 56, alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <View style={{ width: '86%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#A2D033', fontSize: 18, fontWeight: 'bold' }}>Inicio</Text>
          <Feather name="menu" size={28} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}
