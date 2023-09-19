import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';

export const ProtectedRoute = () => {
  const isAuthorized = useAppSelector((state) => state.authReducer.authorized);

  if (isAuthorized) {
    return <Outlet />;
  }

  return <Navigate to={'/signin'} replace />;
};
