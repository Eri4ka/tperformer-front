import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ForgotPasswordConfirmPage } from '@/pages/ForgotPasswordConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { ResetPasswordPage } from '@/pages/ResetPasswordPage';
import { ResetPasswordSuccessPage } from '@/pages/ResetPasswordSuccessPage';
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
  {
    path: '/forgot-password',
    children: [
      {
        index: true,
        element: <ForgotPasswordPage />,
      },
      {
        path: 'confirm',
        element: <ForgotPasswordConfirmPage />,
      },
    ],
  },
  {
    path: '/reset-password',
    children: [
      {
        index: true,
        element: <ResetPasswordPage />,
      },
      {
        path: 'success',
        element: <ResetPasswordSuccessPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
