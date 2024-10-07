import api from '../components/services/apiAuthService';

export const saveCategory = async (name, type) => {

    const tagData = {
        name: name,
        type: type,
    };
  

  try {
    const response = await api.post('http://localhost:8080/tags/save-tag', tagData);

    return response;

  } catch (error) {

    console.error('Erro no login:', error);

    throw error; 
  }
}

export const getCategoryByUserId = async () => {
    try{
    const response = await api.get('http://localhost:8080/tags/get-user-tags')
        return response.data.tags;

    }catch(error) {

    console.error('Erro ao trazer category:', error);

    throw error; 
}}

export const getDefaultCategories = async () => {

  try{
    const response = await api.get('http://localhost:8080/tags/get-default-tags')
        return response.data.tags;

    }catch(error) {

    console.error('Erro ao trazer category:', error);

    throw error; 
}}