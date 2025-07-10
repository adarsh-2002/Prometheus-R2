import React, { useState } from 'react';
import API_BASE_URL from '../config';

const Profile = ({ user, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || '',
    phone: user.phone || '',
    address: user.address || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setIsEditing(false);
        Object.assign(user, data.user);
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || '',
      phone: user.phone || '',
      address: user.address || ''
    });
    setIsEditing(false);
    setError('');
    setSuccess('');
  };

  return (
    <div className="auth-container">
      <div className="profile-container">
        <div className="profile-header">
          <h1>User Profile</h1>
          <p>Welcome back, {user.name}!</p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleUpdateProfile}>
          <div className="profile-info">
            <div className="profile-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="profile-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                disabled
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter phone number"
              />
            </div>

            <div className="profile-field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter address"
              />
            </div>

            <div className="profile-field">
              <label>Member Since</label>
              <input
                type="text"
                value={new Date(user.createdAt).toLocaleDateString()}
                disabled
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </div>
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <>
                <button 
                  type="submit" 
                  className="btn" 
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={handleCancel}
                  disabled={loading}
                  style={{ background: '#6c757d' }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                className="btn" 
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
            <button 
              type="button" 
              className="btn logout-btn" 
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile; 