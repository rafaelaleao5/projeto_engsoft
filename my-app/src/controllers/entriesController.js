import api from '../components/services/apiAuthService';

export const saveEntry = async (entryName, purchaseDate, paymentMethod, entryId) => {

    const entryData = {
        entryName: entryName,
        purchaseDate: purchaseDate,
        paymentMethod: paymentMethod,
        entryId: entryId
    };
  

  try {
    const response = await api.post('http://localhost:8080/entry/save-entry', entryData);

    return response;

  } catch (error) {

    throw error; 
  }
}

export const getEntryByUserId = async () => {
    try{
    const response = await api.get('http://localhost:8080/entry/get-user-entries')
        return response.data.tags;

    }catch(error) {

    throw error; 
}}