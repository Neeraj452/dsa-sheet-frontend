import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const {logout}= useAuth();

  const handleLogout = () => {
    logout()
  };

  return (
    <header className="bg-blue-600 text-white p-4 pl-[15%] flex justify-between items-center">
      <div className="text-xl font-bold">Dashboard</div>
      <nav className="flex items-center space-x-6">
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/topics" className="hover:underline">Topics</Link>
        <Link to="/progress" className="hover:underline">Progress</Link>
        <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200 transition">
          Logout
        </button>
      </nav>
    </header>
  );
}
