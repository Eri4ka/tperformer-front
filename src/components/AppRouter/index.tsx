import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ForgotPasswordConfirmPage } from '@/pages/ForgotPasswordConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { ResetPasswordConfirmPage } from '@/pages/ResetPasswordConfirmPage';
import { ResetPasswordPage } from '@/pages/ResetPasswordPage';
import { SignInHelpConfirmPage } from '@/pages/SignInHelpConfirmPage';
import { SignInHelpPage } from '@/pages/SignInHelpPage';
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
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
      {
        path: 'help',
        children: [
          {
            index: true,
            element: <SignInHelpPage />,
          },
          {
            path: 'success',
            element: <SignInHelpConfirmPage />,
          },
        ],
      },
    ],
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
        element: <ResetPasswordConfirmPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
