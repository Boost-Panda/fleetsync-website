import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/home/App';
import ErrorPage from '@/ErrorPage';
import { ThemeProvider } from '@/components/theme-provider';
import '@/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: '/' }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
