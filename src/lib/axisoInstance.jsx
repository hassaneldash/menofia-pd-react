import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/users',
});

// instance.interceptors.request.use(
//   function (config) {
//     const token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';

//     if (token) {
//       config.headers.set('Authorization', `Bearer ${token}`);
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
