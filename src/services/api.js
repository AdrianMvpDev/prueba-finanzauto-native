import axios from 'axios';

const apiKey = '65456a87ca30941886739588';
const API_BASE_URL = 'https://dummyapi.io/data/v1/user';

export async function fetchUserData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/?page=1&limit=6`, {
      headers: {
        'app-id': apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

export async function fetchOneUserData(userId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${userId}`, {
      headers: {
        'app-id': apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

export async function updateUserData(userId, updatedUserData) {
  const url = `${API_BASE_URL}/${userId}`;
  const headers = {
    'app-id': apiKey,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.put(url, updatedUserData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar datos del usuario:', error);
    throw error;
  }
}

export async function deleteUserData(userId) {
  const url = `${API_BASE_URL}/${userId}`;
  const headers = {
    'app-id': apiKey,
  };

  try {
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
}

export async function createUserData(newUserData) {
  const url = `${API_BASE_URL}/create`;
  const headers = {
    'app-id': apiKey,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, newUserData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    throw error;
  }
}
