import React, { useState } from 'react';

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.username && formData.password) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
        console.log('Login successful:', formData);
      }, 1000);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ username: '', password: '' });
  };

  if (isLoggedIn) {
    return (
      <div className="login">
        <div className="welcome-message">
          <h3>🎉 Welcome back, {formData.username}!</h3>
          <p>You have successfully logged in.</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    );
  }

  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;