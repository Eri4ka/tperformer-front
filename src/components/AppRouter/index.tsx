import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from '@/components/AppLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { CanvasPage } from '@/pages/CanvasPage';
import CreateSnippetsPage from "@/pages/CreateSnippetsPage";
import { ForgotPasswordConfirmPage } from '@/pages/ForgotPasswordConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { HomePage } from '@/pages/HomePage';
import { ResetPasswordConfirmPage } from '@/pages/ResetPasswordConfirmPage';
import { ResetPasswordPage } from '@/pages/ResetPasswordPage';
import { SignInHelpConfirmPage } from '@/pages/SignInHelpConfirmPage';
import { SignInHelpPage } from '@/pages/SignInHelpPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpConfirmPage } from '@/pages/SignUpConfirmPage';
import { SignUpPage } from '@/pages/SignUpPage';
import SnippetsPage from "@/pages/SnippetsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path:'/publicSnippets',
            element: <SnippetsPage />,
          },
          {
            path:'/publicSnippets/:title',
            element: <CreateSnippetsPage />,
          },
          {
            path: ':canvasId',
            element: <CanvasPage />,
          },
        ],
      },
    ],
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
