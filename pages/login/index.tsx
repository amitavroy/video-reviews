import { LoginForm } from '../../components/forms/login-form';

const LoginPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
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
