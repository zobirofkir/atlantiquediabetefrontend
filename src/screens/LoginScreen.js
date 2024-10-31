import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from '../redux/actions/LoginAction';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('accessToken');

  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.login)

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(LoginAction(email, password));
  };

  useEffect(() => {
    if (token) {
      window.location.href = '/dashboard';
    }
  })



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600 md:px-0 px-2">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">SMD CONNEXION ADMINISTRATEUR</h2>
        
        {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-md font-medium text-gray-700 font-bold" htmlFor="email">Adresse email</label>
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
            <label className="block text-md font-medium text-gray-700 font-bold" htmlFor="password">Mot de passe</label>
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
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
