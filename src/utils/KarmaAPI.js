import axios from 'axios';

const UPDATE_KARMA_SUCCESS = 'UPDATE_KARMA_SUCCESS';
const UPDATE_KARMA_FAILURE = 'UPDATE_KARMA_FAILURE';

const updateKarma = async (contactId) => {
  try {
    const response = await axios.post(`/api/karma/${contactId}`);
    return {
      type: UPDATE_KARMA_SUCCESS,
      payload: response.data
    };
  } catch (error) {
    return {
      type: UPDATE_KARMA_FAILURE,
      payload: error.message
    };
  }
};

export { UPDATE_KARMA_SUCCESS, UPDATE_KARMA_FAILURE, updateKarma };