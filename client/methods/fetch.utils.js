import axios from 'axios';


export const fetchArenas = (callback) => {
  axios.get(`/api/arenas/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
};

export const fetchUsersList = (user, callback) => {
  axios.get(`/api/lists/${user}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
};
