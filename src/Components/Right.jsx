
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ProgressLine from './ProgressLine';
import Weight from  "/Images/weight.jpg"
const Right = ({ onBack, onNext, currentPage }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center justify-center mt-6" style={{ width: '70%' }}> 
        <FaArrowLeft className="back-icon" onClick={onBack} style={{ minWidth: '30px', marginRight: '10px' }} />
        <ProgressLine currentPage={currentPage} lineWidth="line-width" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-4xl h-screen"> 
        <div className="right-img mr-0 md:mr-8 flex-shrink-0 max-w-2xl"> 
          <img src={Weight} alt="" className="h-[400px] w-full"/>
        </div>
        <div className="left-content text-center md:text-left flex-1"> {/* Added flex-1 to make it take remaining space */}
          <h1 className="text-3xl font-semibold mb-4">You're in the right place</h1>
          <p className="text-gray-600 mb-6">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, computer science, and science.</p>
          <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg ml-4 md:ml-0" onClick={onNext}>Continue</button> 
        </div>
      </div>
    </div>
  );
};

export default Right;
