import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconGroup({ icons, onItemClick }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} onPress={() => onItemClick(icon)} style={{ marginRight: index < icons.length - 1 ? 10 : 0 }}>
          <Ionicons name={icon} size={24} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
