import { AuthLayout } from '@/components/AuthLayout';

import { SignInHelpForm } from './components/SignInHelpForm';

export const SignInHelpPage = () => {
  return (
    <AuthLayout shouldGoToPrevPage>
      <SignInHelpForm />
    </AuthLayout>
  );
};
