import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import appRouter from './components/router/AppRouter';
import api from './helpers/network/api';

function App() {
  useEffect(() => {
    api.test();
  }, []);

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
