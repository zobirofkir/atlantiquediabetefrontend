import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  // Function to generate a PDF for each cart item
  const generatePDFForItem = (item) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Inscription Details', 10, 10);
    doc.text(`Name: ${item.first_name} ${item.last_name}`, 10, 20);
    doc.text(`City: ${item.city}`, 10, 30);
    doc.text(`Speciality: ${item.speciality}`, 10, 40);
    doc.text(`Phone: ${item.phone}`, 10, 50);
    doc.text(`Email: ${item.email}`, 10, 60);
    doc.text(`In-person Participation: ${item.in_person ? 'Yes' : 'No'}`, 10, 70);
    doc.text(`Certificate Needed: ${item.certificate ? 'Yes' : 'No'}`, 10, 80);

    doc.save(`${item.first_name}_${item.last_name}_Details.pdf`);
  };

  return (
    <div className='container mx-auto py-12 px-6'>
      {/* Header */}
      <header className='flex justify-between items-center bg-gray-800 p-5 rounded-lg shadow-md text-white'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='bg-red-500 px-3 py-2 rounded-full shadow-lg hover:bg-red-600 focus:outline-none'
          >
            <i className="fa-solid fa-right-from-bracket text-white"></i>
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
              <div className='py-3 px-4 text-gray-800 text-sm'>
                <p>Are you sure you want to log out?</p>
              </div>
              <div className='flex border-t border-gray-200'>
                <button
                  onClick={handleLogout}
                  className='w-full py-2 text-center text-red-600 hover:bg-red-100'
                >
                  Yes, Log out
                </button>
                <button
                  onClick={toggleDropdown}
                  className='w-full py-2 text-center text-gray-600 hover:bg-gray-100'
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Cards List */}
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {loading && <p className='text-center text-gray-500'>Loading...</p>}
        {error && <p className='text-center text-red-500'>{error}</p>}
        {data.map((item) => (
          <div key={item.id} className='bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <h2 className='text-2xl font-semibold mb-3 text-gray-800'>{item.first_name} {item.last_name}</h2>
            <p className='text-gray-600'><strong>City:</strong> {item.city}</p>
            <p className='text-gray-600'><strong>Speciality:</strong> {item.speciality}</p>
            <p className='text-gray-600'><strong>Phone:</strong> {item.phone}</p>
            <p className='text-gray-600'><strong>Email:</strong> {item.email}</p>
            <p className='text-gray-600'><strong>In-person Participation:</strong> {item.in_person ? 'Yes' : 'No'}</p>
            <p className='text-gray-600'><strong>Certificate Needed:</strong> {item.certificate ? 'Yes' : 'No'} </p>

            <button
              onClick={() => generatePDFForItem(item)}
              className='bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200'
            >
              Download as PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
