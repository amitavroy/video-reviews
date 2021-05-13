import Link from 'next/link';
import { LoginForm } from '../../components/forms/login-form';

const LoginPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="mb-3">
        <h1>Welcome to Video Review</h1>
      </div>
      <div className="card col-4 shadow">
        <div className="card-body">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
