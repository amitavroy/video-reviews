import Link from 'next/link';
import Card from '../../components/card';
import { LoginForm } from '../../components/forms/login-form';

const LoginPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="mb-3">
        <h1>Video Review</h1>
      </div>
      <Card>
        <LoginForm />
      </Card>
    </div>
  );
};
export default LoginPage;
