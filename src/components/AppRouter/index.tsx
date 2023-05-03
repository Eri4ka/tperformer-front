import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignInPage } from '@/pages/SignInPage';
import { SignUpConfirmPage } from '@/pages/SignUpConfirmPage';
import { SignUpPage } from '@/pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hi</div>,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    children: [
      {
        index: true,
        element: <SignUpPage />,
      },
      {
        path: 'success',
        element: <SignUpConfirmPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
