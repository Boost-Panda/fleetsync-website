import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/pages/home/App';
import Terms from '@/pages/terms/page';
import Privacy from '@/pages/privacy/page';

import ErrorPage from '@/ErrorPage';
import { ThemeProvider } from '@/components/theme-provider';

import '@/index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/terms',
      element: <Terms />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/privacy',
      element: <Privacy />,
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
