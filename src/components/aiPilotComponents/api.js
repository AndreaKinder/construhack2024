import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
  });
    
const uploadImage = async (imageData) => {
  try {
    const response = await api.post('/upload', {
      image: imageData,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getInventory = async () => {
  try {
    const response = await api.get('/inventory');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addInventoryItem = async (itemData) => {
  try {
    const response = await api.post('/inventory', itemData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { uploadImage, getInventory, addInventoryItem };