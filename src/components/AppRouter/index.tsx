import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignInPage } from '@/pages/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hi</div>,
  },
  {
    path: 'signin',
    element: <SignInPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
