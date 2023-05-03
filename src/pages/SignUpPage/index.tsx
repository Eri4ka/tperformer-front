import { AuthLayout } from '@/components/AuthLayout';
import { SignUpForm } from '@/components/SignUpForm';

export const SignUpPage = () => {
  return (
    <AuthLayout shouldGoToPrevPage>
      <SignUpForm />
    </AuthLayout>
  );
};
