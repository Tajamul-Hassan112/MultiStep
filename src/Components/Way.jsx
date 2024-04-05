
import React from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import ProgressLine from './ProgressLine';

const Way = ({ onBack, onNext, currentPage }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-center mt-6">
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-6">
          <FaArrowLeft className="back-icon" onClick={onBack} style={{ minWidth: '30px', marginRight: '10px' }} />
          <ProgressLine currentPage={currentPage} lineWidth="line-width" />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center">
          <div className="mb-6 mr-6">
            <img src="/src/assets/Images/complete.jpg" alt="Complete" className="w-full h-auto max-w-xs md:max-w-none md:w-64 md:h-64" />
          </div>
          <div>
            <div className="flex flex-col items-start mb-2">
              <h1 className="text-2xl font-semibold mb-2">You're on your way!</h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 fill-current mr-1 md:mr-2" />
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving solutions."</p>
            <div className="text-right">
              <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg" onClick={onNext}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Way;
