import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '@/store/hooks';
import { fetchOAuthLoginUser } from '@/store/slices/authSlice';

export const OAuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { service } = useParams();

  useEffect(() => {
    if (service) dispatch(fetchOAuthLoginUser({ query: window.location.search, service }));

    navigate('/signin');
  });

  return <></>; // TODO: loader
};
