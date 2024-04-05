import React from "react";
import { InterestData } from "./data.jsx";
import { FaArrowLeft } from 'react-icons/fa';
import ProgressLine from "./ProgressLine.jsx";

const Interest = ({ onBack, onNext, currentPage }) => {
  return (
    <div className="container mx-auto px-4 max-w-lg">
      <div className="flex items-center justify-center mt-6" style={{ width: '70%' }}> 
        <FaArrowLeft className="back-icon" onClick={onBack} style={{ minWidth: '30px', marginRight: '10px' }} />
        <ProgressLine currentPage={currentPage} lineWidth="line-width" />
      </div>
      <div className="content mt-6 font-sans text-center">
        <h1 className="text-3xl font-semibold mb-4">Which are you most interested in?</h1>
        <p className="text-gray-600 mb-6">Choose just one. This will help us get started (but won't limit your experience)</p>
        <div className="list">
          {InterestData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-200 rounded-md p-2 mb-4">
              <img src={item.image} alt={item.title} className="w-8 h-8 mr-2" />
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg mt-4" onClick={onNext}>Continue</button>
      </div>
    </div>
  );
};

export default Interest;
