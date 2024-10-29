import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/inscriptions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setData(response.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/');
    } else {
      fetchData();
    }
  }, [navigate]); 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className='container mx-auto py-10 px-10'>

      <header className='flex justify-between items-center mb-6'>
        <h1 className='md:text-xl text-xl font-semibold text-gray-800 '>Dashboard</h1>
        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none'
          >
            <i class="fa-solid fa-right-from-bracket "></i>
          </button>

          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10'>
              <div className='py-2 px-4 text-gray-700'>
                <p>Are you sure you want to log out?</p>
              </div>
              <div className='flex justify-between border-t border-gray-200'>
                <button
                  onClick={handleLogout}
                  className='w-full py-2 text-center text-red-500 hover:bg-red-100'
                >
                  Yes, Log out
                </button>
                <button
                  onClick={toggleDropdown}
                  className='w-full py-2 text-center text-gray-500 hover:bg-gray-100'
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className='mt-10'>
        {loading && <p className='text-center text-gray-500'>Loading...</p>}
        {error && <p className='text-center text-red-500'>{error}</p>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            data.map((item) => (
              <div key={item.id} className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-start transition-transform transform hover:scale-105'>
                <h2 className='text-xl font-semibold mb-2'>{item.first_name} {item.last_name}</h2>
                <p className='text-gray-600 mb-1'><strong>City:</strong> {item.city}</p>
                <p className='text-gray-600 mb-1'><strong>Speciality:</strong> {item.speciality}</p>
                <p className='text-gray-600 mb-1'><strong>Phone:</strong> {item.phone}</p>
                <p className='text-gray-600 mb-1'><strong>Email:</strong> {item.email}</p>
                <p className='text-gray-600 mb-1'><strong>Participation:</strong> {item.in_person ? 'Yes' : 'No'}</p>
                <p className='text-gray-600'><strong>Certificate Needed:</strong> {item.certificate ? 'Yes' : 'No'}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
