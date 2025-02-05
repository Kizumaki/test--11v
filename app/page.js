"use client";  

import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(""); 
  const [name, setName] = useState('Taylor'); 
  const [friendName, setFriendName] = useState('Chinguun'); 
  const [showName, setShowName] = useState(false); 
  const [showFriendName, setShowFriendName] = useState(false); 

  const handleToggleName = () => {
    setShowName(prevShowName => !prevShowName); 
  };

  const handleToggleFriendName = () => {
    setShowFriendName(prevShowFriendName => !prevShowFriendName); 
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100">
      <button 
        onClick={handleToggleName} 
        className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-xl transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 mb-4"
      >
       Show Name
      </button>
      {showName && <p className="mt-4 text-xl text-black">{name}</p>} 

      <button 
        onClick={handleToggleFriendName} 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 mt-4"
      >
        Show Friend Name
      </button>
      {showFriendName && <p className="mt-4 text-xl text-black">{friendName}</p>} 
    </div>
  );
};

export default UseStateHook;