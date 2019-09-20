import React from 'react';
import './App.css';

import Bootstrap from './container/Bootstrap/bootstrap';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Bootstrap/>
    </BrowserRouter>
  );
}

export default App;
