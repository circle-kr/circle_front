import axios from 'axios';

const api = axios.create({
  baseURL: '/api/users',
  withCredentials: true,
});

api.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token');

        await axios.post('/api/refresh', { refreshToken }, { withCredentials: true });

        return api(originalRequest);
      } catch {
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  const res = await axios.post('/api/login', { email, password }, { withCredentials: true });
  localStorage.setItem('refreshToken', res.data.refreshToken);
  return res.data.user;
};

export const logout = async () => {
  await axios.post('/api/logout', {}, { withCredentials: true });
  localStorage.removeItem('refreshToken');
};

export const refreshAccessToken = async (refreshToken) => {
  const res = await axios.post('/api/refresh', { refreshToken }, { withCredentials: true });
  return res.data.user;
};

export default api;
