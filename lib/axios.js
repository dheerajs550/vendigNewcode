// // lib/axios.js
// import axios from "axios";
// import { BASE_URL } from "./apiRoutes";

// const api = axios.create({
//   baseURL: `${BASE_URL}`, // backend base url
//   // timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Request interceptor (jaise token lagana ho)
// api.interceptors.request.use((config) => {
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


// ...........
import axios from "axios";
import { BASE_URL } from "./apiRoutes";

const api = axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor → har request ke sath token bhejenge
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("ownerToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;

