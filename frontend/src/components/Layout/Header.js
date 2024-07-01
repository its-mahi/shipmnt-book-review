import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-slate-700 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Book Reviews
        </Link>
        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/reviews" className="hover:text-gray-300">
                Reviews
              </Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
