import React, { useState } from 'react';
import { View, ScrollView, TextInput, ActivityIndicator, Alert, TouchableOpacity, Image, Text } from 'react-native';
import { createUserData, fetchUserData } from '../services/api';
import Header from '../components/layout/Header';
import { Feather } from '@expo/vector-icons';
import CustomTextInput from '../components/widgets/CustomTextInput';
import CreateModal from '../components/widgets/CreateModal';

export default function Create() {
  const [newUser, setNewUserData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    picture: '',
    dateOfBirth: '',
    phone: '',
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setNewUserData({
      ...newUser,
      [fieldName]: value,
    });
  };

  const handleSave = async () => {
    setIsSaving(true);

    try {
      await createUserData(newUser);
      setIsModalVisible(true);
      setNewUserData({
        title: '',
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        picture: '',
        dateOfBirth: '',
        phone: '',
      });
      await fetchUserData();
      setIsSaving(false);
    } catch (error) {
      console.error('Error al crear un nuevo usuario:', error);
      setIsSaving(false);
      Alert.alert('Error', 'Hubo un problema al crear el usuario.');
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView style={{ backgroundColor: '#F9FBFB', flex: 1, position: 'relative' }} showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: '#EDF4D8', height: 688, width: '100%', position: 'absolute', top: 0 }} />
      <Header />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
        <Text style={{ color: '#4E4E4E', fontSize: 30, fontWeight: 'bold', maxWidth: 257 }}>Información del usuario</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30, position: 'relative' }}>
        <View style={{ height: 203, width: 198, borderRadius: 15 }}>
          <Feather
            name="user"
            size={198}
            color={'#F5F5F5'}
            style={{ height: 203, width: 198, borderRadius: 15, borderWidth: 1, borderColor: '#707070', backgroundColor: '#FFFFFF' }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#A2D033',
              borderRadius: 9999,
              alignItems: 'center',
              justifyContent: 'center',
              height: 51,
              width: 51,
              position: 'absolute',
              top: -25,
              right: -15,
              display: 'flex',
            }}
          >
            <Feather name="edit" size={19} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={{ width: '86%', backgroundColor: '#F7F7F7', padding: 30, borderRadius: 26, gap: 20, marginBottom: 30 }}>
          <CustomTextInput label="Titulo" value={newUser.title} onChangeText={(text) => handleFieldChange('title', text)} />
          <CustomTextInput label="Nombres" value={newUser.firstName} onChangeText={(text) => handleFieldChange('firstName', text)} />
          <CustomTextInput label="Apellidos" value={newUser.lastName} onChangeText={(text) => handleFieldChange('lastName', text)} />
          <CustomTextInput label="Género" value={newUser.gender} onChangeText={(text) => handleFieldChange('gender', text)} />
          <CustomTextInput label="Correo electrónico" value={newUser.email} onChangeText={(text) => handleFieldChange('email', text)} />
          <CustomTextInput
            label="Fecha de nacimiento"
            value={newUser.dateOfBirth}
            onChangeText={(text) => handleFieldChange('dateOfBirth', text)}
          />
          <CustomTextInput label="Teléfono" value={newUser.phone} onChangeText={(text) => handleFieldChange('phone', text)} />
        </View>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', gap: 20, marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 222,
            height: 50,
            backgroundColor: '#A2D033',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            gap: 8,
          }}
          onPress={handleSave}
        >
          <Feather name="check" size={19} color={'#FFFFFF'} />
          <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{isSaving ? <ActivityIndicator size="small" color="#FFFFFF" /> : 'Crear'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 222,
            height: 50,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            borderWidth: 1,
            borderColor: '#EFEFEF',
            gap: 8,
          }}
        >
          <Feather name="x" size={19} color={'#A1A2A1'} />
          <Text style={{ color: '#A1A2A1', fontSize: 16 }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <CreateModal isVisible={isModalVisible} onClose={closeModal} />
    </ScrollView>
  );
}
