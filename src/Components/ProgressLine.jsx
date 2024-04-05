import React from 'react';

const ProgressLine = ({ currentPage, lineWidth }) => {
  const progressWidth = `${(currentPage / 5) * 100}%`; // Assuming 5 pages in total

  return (
    <div className={`flex items-center ${lineWidth}`} style={{ width: '100%', maxWidth: '900px' }}> {/* Updated width and added maxWidth */}
      <div className="flex-grow h-1 bg-gray-300 relative">
        <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: progressWidth }}></div>
      </div>
    </div>
  );
};

export default ProgressLine;
