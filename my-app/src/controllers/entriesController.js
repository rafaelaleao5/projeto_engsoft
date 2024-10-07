import api from '../components/services/apiAuthService';

export const saveEntry = async (entry) => {

  try {
    const response = await api.post('http://localhost:8080/entry/save-entry', entry);

    return response.data;

  } catch (error) {

    throw error; 
  }
}

export const getEntryByUserId = async () => {
    try{
    const response = await api.get('http://localhost:8080/entry/get-user-entries')
        return response.data;

    }catch(error) {

    throw error; 
}}