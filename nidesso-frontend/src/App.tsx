import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import appRouter from './components/router/AppRouter';
import useResizeObserver from './helpers/useResizeObserver';

function App() {
  const size = useResizeObserver(window.document.body);

  useEffect(() => {
    // api.test();
  }, []);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.documentElement.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`);
  }, [size])

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
