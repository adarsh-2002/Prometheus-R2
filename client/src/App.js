import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import api from './utils/api';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const data = await api.get('/api/auth/profile', token);
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  if (loading) {
    return (
      <div className="auth-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <Profile user={user} onLogout={handleLogout} />
      ) : (
        <AuthForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App; 