
import React from 'react';
import Student from './Components/Student';
import Interest from './Components/Interest';
import Right from './Components/Right';
import Geo from './Components/Geo';
import Way from './Components/Way';
import Circle from './Components/Circle';
import Learning from './Components/Learning';
import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Student onNext={nextPage} currentPage={currentPage} />;
      case 2:
        return <Interest onBack={prevPage} onNext={nextPage} currentPage={currentPage} lineWidth="w-1/2" />;
      case 3:
        return <Right onBack={prevPage} onNext={nextPage} currentPage={currentPage} />;
      case 4:
        return <Geo onBack={prevPage} onNext={nextPage} currentPage={currentPage} />;
      case 5:
        return <Way onBack={prevPage} onNext={nextPage} currentPage={currentPage} />;
      case 6:
        return <Circle onBack={prevPage} onNext={nextPage} />;
      case 7:
        return <Learning />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
