```javascript
import axios from 'axios';

// Function to get contacts from the backend
export const getContacts = async (userId) => {
  try {
    const response = await axios.get(`/api/contacts/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts', error);
    return [];
  }
};

// Function to increase karma of a contact
export const increaseKarma = async (contactId) => {
  try {
    const response = await axios.put(`/api/contacts/${contactId}/karma`);
    return response.data;
  } catch (error) {
    console.error('Error increasing karma', error);
    return null;
  }
};
```