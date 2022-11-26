import React, { useEffect } from 'react';
import './App.scss';
import Home from './features/home/Home';
import api from './helpers/network/api';

function App() {
  useEffect(() => {
    api.test();
  }, []);

  return (
    <Home></Home>
  );
}

export default App;
