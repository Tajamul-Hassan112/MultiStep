
import React from "react";
import firstData from "./data.jsx";
import ProgressLine from "./ProgressLine.jsx";


const Student = ({ onNext, currentPage }) => {
  return (
    <div className="container mx-auto  mt-5 px-4 flex flex-col justify-center items-center">
      <ProgressLine currentPage={currentPage} lineWidth="w-1" /> 
      <div className="content mt-24 font-sans">
        <h1 className="text-3xl font-semibold mb-4">Which describes you best?</h1>
        <p className="text-gray-600 mb-6">This will help us personalize your experience</p>

        <div className="list">
          {firstData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-200 rounded-md p-2 mb-4">
              <img src={item.image} alt={item.title} className="w-8 h-8 mr-2" />
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg ml-48" onClick={onNext}>Continue</button>
      </div>
    </div>
  );
};

export default Student;
