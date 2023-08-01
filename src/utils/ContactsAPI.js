import axios from 'axios';

export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const fetchContacts = async (userId) => {
  try {
    const response = await axios.get(`/api/contacts/${userId}`);
    return {
      type: FETCH_CONTACTS_SUCCESS,
      payload: response.data
    };
  } catch (error) {
    return {
      type: FETCH_CONTACTS_FAILURE,
      payload: error.message
    };
  }
};