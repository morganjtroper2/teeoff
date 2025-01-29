import React from 'react';
import Courses from './Components/Courses';

const App: React.FC = () => {
  return (
    <div className="font-serif grid grid-cols-3 gap-3">
      <h1>Courses</h1>
      <Courses />
    </div>
  );
};

export default App;