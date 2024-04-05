
import React from 'react';
import circleImage from  "/Images/circle.png"

const Circle = ({onNext}) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-gray-300 flex justify-center items-center mb-4">
          <img src={circleImage} alt="" className="w-8 h-8 md:w-16 md:h-16" />
        </div>
        <h3 className="text-center font-bold  font-sans">Finding learning path recommendations for you based on your responses</h3>
        <button className="bg-black mt-12 text-white font-semibold py-2 px-6 rounded-lg ml-48" onClick={onNext}>Continue</button>
      </div>
     
    </div>
  );
};

export default Circle;
