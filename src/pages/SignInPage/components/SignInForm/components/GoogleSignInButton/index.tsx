import { ReactComponent as GoogleIc } from '@/assets/images/social/google.svg';
import { BaseButton, ButtonVariant } from '@/components/Button/BaseButton';
import { useScript } from '@/hooks/useScript';

export const GoogleSignInButton = ({ className }: { className?: string }) => {
  useScript('https://accounts.google.com/gsi/client');

  const signIn = () => {
    // @ts-expect-error google oauth global
    const client = google.accounts.oauth2.initCodeClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
      ux_mode: 'redirect',
      redirect_uri: window.location.origin + '/signin/callback/google',
    });

    client.requestCode();
  };

  return (
    <BaseButton variant={ButtonVariant.flat} className={className} icon={<GoogleIc />} onClick={signIn}>
      Continue with Google
    </BaseButton>
  );
};
