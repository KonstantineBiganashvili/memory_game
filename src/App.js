import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/index';
import EasyMode from './components/EasyMode/index';
import MediumMode from './components/MediumMode/index';
import HardMode from './components/HardMode/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/easy" element={<EasyMode />} />
        <Route path="/medium" element={<MediumMode />} />
        <Route path="/hard" element={<HardMode />} />
      </Routes>
    </Router>
  );
};

export default App;
