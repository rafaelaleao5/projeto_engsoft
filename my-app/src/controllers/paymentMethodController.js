import api from '../components/services/apiAuthService';

export const savePaymentMethod= async (name, type) => {

    const paymentMethodData = {
        methodName: name
    };
  

  try {
    const response = await api.post('http://localhost:8080/payment-methods/save-payment-method', paymentMethodData);

    return response;

  } catch (error) {

    throw error; 
  }
}

export const getPaymentMethodByUserId = async () => {
    try{
    const response = await api.get('http://localhost:8080/payment-methods/get-user-payment-method')
        return response.data.paymentMethods;

    }catch(error) {

    console.error('Erro ao trazer category:', error);

    throw error; 
}}

export const getDefaultPaymentMethod = async () => {
  try{
  const response = await api.get('http://localhost:8080/payment-methods/get-default-payment-method')
      return response.data.paymentMethods;

  }catch(error) {

  console.error('Erro ao trazer category:', error);

  throw error; 
}}