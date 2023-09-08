import { useAppDispatch } from '@/store/hooks';
import { fetchDiscordLoginUser } from '@/store/slices/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const DiscordAuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      dispatch(fetchDiscordLoginUser({ code }));
    }

    navigate('/signin');
  });

  return <></>; // TODO: loader
};
