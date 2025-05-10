import React, { createContext, useEffect, useState } from 'react';
import { refreshAccessToken } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);     
  const [loading, setLoading] = useState(true);

  const login = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('refreshToken', userInfo.refreshToken); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('refreshToken');
  };

  const checkAuth = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      setLoading(false);
      return;
    }

    try {
      const userInfo = await refreshAccessToken(refreshToken); 
      setUser(userInfo);
    } catch (err) {
      console.error('로그인 상태 확인 실패:', err);
      localStorage.removeItem('refreshToken');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth(); 
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
