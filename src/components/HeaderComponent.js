import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
    };

    const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    };

  return (
    <header className='flex justify-between items-center bg-gray-800 p-5 rounded-lg shadow-md text-white'>
        <h1 className='text-xl font-bold'>Tableau de bord</h1>
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
                <p>Etes-vous certains de vouloir vous déconnecter?</p>
            </div>
            <div className='flex border-t border-gray-200'>
                <button
                onClick={handleLogout}
                className='w-full py-2 text-center text-red-600 hover:bg-red-100'
                >
                Oui
                </button>
                <button
                onClick={toggleDropdown}
                className='w-full py-2 text-center text-gray-600 hover:bg-gray-100'
                >
                Annuler
                </button>
            </div>
            </div>
        )}
        </div>
    </header>

  )
}

export default HeaderComponent