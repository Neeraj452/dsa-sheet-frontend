import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const {user}= useAuth();
   
  return (
    <div className="flex flex-col ">
     
      <header className="p-8 pl-[15%]">
        <h1 className="text-3xl font-bold text-black">Welcome {user.name}</h1>
        <p className="text-gray-600 mt-1">Email: {user.email}</p>
      </header>

      
      <main className="flex-grow flex items-center justify-center">
       
      </main>

      <footer className="p-4 text-center text-gray-500 border-t">
        © 2025 Profile. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Profile
