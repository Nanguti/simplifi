import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://adminpanel.nanguti.co.ke/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  axiosClient.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {

      const { status } = error.response;

      if (status === 401) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken'); 
          window.location.href = '/login'; 
        }
      } else if (status === 403) {
        console.log('Forbiddden')
      } else if (status === 404) {
        console.log('Resource not found')
      } else if (status >= 500) {
        console.log('Internal server error occured')
      }
    } else if (error.request) {
      console.error('Error making request:', error.request);
    } else {
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

