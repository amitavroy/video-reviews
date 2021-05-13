import Link from 'next/link';
import { LoginForm } from '../../components/forms/login-form';

const LoginPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div>
        <h2>Welcome to Video Review</h2>
        <p>
          Create an account if you already don't have any account by clicking
          &nbsp;
          <Link href="/register">
            <a>here</a>
          </Link>
          .
        </p>
      </div>
      <div className="card col-4 shadow">
        <div className="card-header">Please login</div>
        <div className="card-body">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
