import axios from 'axios';


export const fetchArenas = (callback) => {
  axios.get('/api/arenas/')
    .then((response) => {
      callback(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
};
