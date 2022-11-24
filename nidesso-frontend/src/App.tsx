import React, { useEffect } from 'react';
import './App.scss';
import api from './helpers/network/api';

function App() {
  useEffect(() => {
    api.test();
  }, []);

  return (
    <h1>Nidesso Frontend</h1>
  );
}

export default App;
