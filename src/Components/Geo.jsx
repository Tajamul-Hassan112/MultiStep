
import React from 'react';
import { geoData } from "./data.jsx";
import { FaArrowLeft } from 'react-icons/fa';
import ProgressLine from './ProgressLine.jsx';

const Geo = ({ onBack, onNext, currentPage }) => {
  return (
    <div className="container">
     <div className="flex items-center justify-center mt-6" style={{ width: '70%' }}> {/* Adjusted width to 70% */}
        <FaArrowLeft className="back-icon" onClick={onBack} style={{ minWidth: '30px', marginRight: '10px' }} />
        <ProgressLine currentPage={currentPage} lineWidth="line-width" />
      </div>
      <div className="bottom flex flex-col justify-center items-center gap-8 mt-8">
        <div className="b-top flex flex-col gap-8">
          <h1 className="text-4xl font-bold font-sans">What is your math comfort level?</h1>
          <p className="text-xl text-gray-700 font-sans">Choose the highest level you feel confident in - you can always adjust later</p>
        </div>
        <div className="b-bottom flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {geoData.map((item) => (
            <div key={item.id} className="h-[200px] w-full md:w-[250px] border text-center hover:border-golden bg-white rounded-lg shadow-md">
              <h2 className="text-xl p-4">{item.content}</h2>
              <p className="text-xl text-gray-500 p-2">{item.title}</p>
              <p className="text-xl text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg mt-6 md:ml-96" onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}

export default Geo;
