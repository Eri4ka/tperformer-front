import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

import snippetsService from "@/api/services/SnippetsService.ts";
import { AppLayout } from '@/components/AppLayout';
import {route} from "@/components/AppRouter/constants.ts";
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { CanvasPage } from '@/pages/CanvasPage';
import CreateSnippetsPage from '@/pages/CreateSnippetsPage';
import Error404 from "@/pages/Erorr404";
import { ForgotPasswordConfirmPage } from '@/pages/ForgotPasswordConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { HomePage } from '@/pages/HomePage';
import { OAuthPage } from '@/pages/OAuthPage';
import { ResetPasswordConfirmPage } from '@/pages/ResetPasswordConfirmPage';
import { ResetPasswordPage } from '@/pages/ResetPasswordPage';
import { SignInHelpConfirmPage } from '@/pages/SignInHelpConfirmPage';
import { SignInHelpPage } from '@/pages/SignInHelpPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpConfirmPage } from '@/pages/SignUpConfirmPage';
import { SignUpPage } from '@/pages/SignUpPage';
import SnippetsPage from '@/pages/SnippetsPage';

const router = createBrowserRouter([
  {
    path: route.home,
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
            path: route.publicSnippets,
            element: <SnippetsPage />,
          },
          {
            path: route.createSnippet,
            loader:({params})=>{
                return snippetsService.getSnippet(params.id?+params.id:0)
                },
            element: <CreateSnippetsPage />,
            errorElement:<Error404/>,

          },
          {
            path: ':canvasId',
            element: <CanvasPage />,
          },
        ],
      },
      {
        path: route.error404,
        element: <Error404 />,
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
      {
        path: 'callback',
        children: [
          {
            path: ':service',
            element: <OAuthPage />,
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
  {
    path: '*',
    element:  <Navigate to={route.error404} replace={true}/>,
  },

]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
