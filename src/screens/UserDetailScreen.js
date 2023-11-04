import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchOneUserData, updateUserData } from '../services/api';
import Header from '../components/layout/Header';
import { Feather } from '@expo/vector-icons';
import CustomTextInput from '../components/widgets/CustomTextInput';

export default function UserDetailScreen({ route }) {
  const { userId } = route.params;
  const [userData, setUserData] = useState(null);
  const [editable, setEditable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#A2D033');
  const [iconColor, setIconColor] = useState('#FFFFFF');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchOneUserData(userId);
        setUserData(userData);
      } catch (error) {
        console.error('Error al obtener los datos de usuario:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <ActivityIndicator size="large" color="#166D6B" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  const onChangeText = (fieldName, text) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: text,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const updatedUserData = {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        gender: userData.gender,
        email: userData.email,
        dateOfBirth: userData.dateOfBirth,
        phone: userData.phone,
      };

      const updatedUser = await updateUserData(userId, updatedUserData);
      console.log('Usuario actualizado:', updatedUser);
    } catch (error) {
      console.error('Error al actualizar los datos de usuario:', error);
    }

    setIsSaving(false);
    setIsEditing(false);
    setEditable(false);
    setButtonBackgroundColor('#A2D033');
    setIconColor('#FFFFFF');
  };

  return (
    <ScrollView style={{ backgroundColor: '#F9FBFB', flex: 1, position: 'relative' }} showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: '#EDF4D8', height: 688, width: '100%', position: 'absolute', top: 0 }} />
      <Header />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
        <Text style={{ color: '#4E4E4E', fontSize: 30, fontWeight: 'bold', maxWidth: 257 }}>Información del usuario</Text>
        <TouchableOpacity
          onPress={() => {
            setIsEditing(!isEditing);
            setEditable(!editable);
            if (buttonBackgroundColor === '#A2D033') {
              setButtonBackgroundColor('#EFEFEF');
              setIconColor('#BFBFBF');
            } else {
              setButtonBackgroundColor('#A2D033');
              setIconColor('#FFFFFF');
            }
          }}
          style={{
            backgroundColor: buttonBackgroundColor,
            borderRadius: 9999,
            alignItems: 'center',
            justifyContent: 'center',
            height: 51,
            width: 51,
          }}
        >
          <Feather name="edit" size={19} color={iconColor} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
        <Image
          source={{ uri: userData.picture }}
          style={{ height: 203, width: 198, borderRadius: 15, borderWidth: 1, borderColor: '#707070' }}
        />
      </View>
      <View style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <View
          style={{
            width: '86%',
            backgroundColor: '#F7F7F7',
            margin: 'auto',
            padding: 30,
            borderRadius: 26,
            gap: 20,
            marginBottom: 30,
          }}
        >
          <CustomTextInput label="ID" value={userData.id} editable={false} onChangeText={(text) => onChangeText('id', text)} />
          <CustomTextInput
            label="Nombres"
            value={userData.firstName}
            editable={editable}
            onChangeText={(text) => onChangeText('firstName', text)}
          />
          <CustomTextInput
            label="Apellidos"
            value={userData.lastName}
            editable={editable}
            onChangeText={(text) => onChangeText('lastName', text)}
          />
          <CustomTextInput
            label="Género"
            value={userData.gender}
            editable={editable}
            onChangeText={(text) => onChangeText('gender', text)}
          />
          <CustomTextInput
            label="Correo electrónico"
            value={userData.email}
            editable={editable}
            onChangeText={(text) => onChangeText('email', text)}
          />
          <CustomTextInput
            label="Fecha de nacimiento"
            value={userData.dateOfBirth}
            editable={editable}
            onChangeText={(text) => onChangeText('dateOfBirth', text)}
          />
          <CustomTextInput
            label="Teléfono"
            value={userData.phone}
            editable={editable}
            onChangeText={(text) => onChangeText('phone', text)}
          />
        </View>
      </View>
      {isEditing && (
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
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
              {isSaving ? <ActivityIndicator size="small" color="#FFFFFF" /> : 'Guardar'}
            </Text>
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
            onPress={() => {
              setIsEditing(!isEditing);
              setEditable(!editable);
            }}
          >
            <Feather name="x" size={19} color={'#A1A2A1'} />
            <Text style={{ color: '#A1A2A1', fontSize: 16 }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
