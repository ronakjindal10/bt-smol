import axios from 'axios';

const BASE_URL = '/api/contacts';

export const fetchContacts = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts', error);
    throw error;
  }
};

export const updateKarma = async (contactId) => {
  try {
    const response = await axios.put(`${BASE_URL}/${contactId}`);
    return response.data;
  } catch (error) {
    console.error('Error updating karma', error);
    throw error;
  }
};