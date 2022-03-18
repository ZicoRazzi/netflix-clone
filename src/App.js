import React from 'react';
import Home from './pages/home';
import Browse from './pages/browse';
import Signup from './pages/signup';
import Signin from './pages/signin';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

      </Routes>
    </div>
  );
}

export default App;
