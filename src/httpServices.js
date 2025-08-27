import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes(import.meta.env.VITE_BASE_URL)) {
      const token = localStorage.getItem("authToken");
      request.headers["Authorization"] = `Bearer ${token ? token : "dummy"}`;
    }
    return request;
  }
);
export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  patch: axios.patch,
  put: axios.put
};
