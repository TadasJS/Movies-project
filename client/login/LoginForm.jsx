import React, { useState } from 'react';
import axios from 'axios';
import './LoginCardForm.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      setErrors({ api: 'Login failed. Check your credentials.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.api && <span className="error">{errors.api}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" disabled={loading} type="submit">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
