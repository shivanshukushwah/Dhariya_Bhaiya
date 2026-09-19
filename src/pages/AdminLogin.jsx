import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Qriflame@2026') {
      alert("Login successful! The dashboard to upload certificates and photos will be connected to the backend soon.");
    } else {
      alert("Invalid ID or password. Try using admin / Qriflame@2026");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-logo">
          <h2>Q'riflame Admin</h2>
        </div>
        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="form-group">
            <label>Username (ID)</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              placeholder="Enter admin ID"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn-solid-primary w-100">Login</button>
        </form>
        <div className="admin-footer">
          <p>This panel is for managing certificates and academy gallery.</p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
            <strong>Default ID:</strong> admin <br/>
            <strong>Default Password:</strong> Qriflame@2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
