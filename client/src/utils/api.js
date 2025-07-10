import API_BASE_URL from '../config';

const api = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      if (error.name === 'TypeError') {
        throw new Error('Network error. Please try again.');
      }
      throw error;
    }
  },

  async get(endpoint, token = null) {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return this.request(endpoint, {
      method: 'GET',
      headers
    });
  },

  async post(endpoint, data, token = null) {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return this.request(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
  },

  async put(endpoint, data, token = null) {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return this.request(endpoint, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
  }
};

export default api; 