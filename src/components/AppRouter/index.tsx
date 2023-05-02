import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hi</div>,
  },
  {
    path: 'signin',
    element: <SignInPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
