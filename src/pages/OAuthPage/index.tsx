import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '@/store/hooks';
import { fetchDiscordLoginUser } from '@/store/slices/authSlice';

export const OAuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { service } = useParams();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code && service) {
      dispatch(fetchDiscordLoginUser({ code, service }));
    }

    navigate('/signin');
  });

  return <></>; // TODO: loader
};
