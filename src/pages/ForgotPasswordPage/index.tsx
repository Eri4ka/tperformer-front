import { AuthLayout } from '@/components/AuthLayout';

import { ForgotPasswordForm } from './components/ForgotPasswordForm';

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout shouldGoToPrevPage>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};
