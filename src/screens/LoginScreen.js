import axios from 'axios';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/auth/login`, user);
      localStorage.setItem('accessToken', response.data.data.accessToken);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600 md:px-0 px-2">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">SMD ADMIN LOGIN</h2>
        
        {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-md font-medium text-gray-700 font-bold" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 transition duration-200"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 font-bold" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 transition duration-200"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
