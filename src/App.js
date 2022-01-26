import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './modules/news'

function App() {
  return (
    <div className="App">
      <div className='news'>
        <News />
      </div>
    </div>
  );
}

export default App;
