import RegistrationForm from '../../components/forms/registration-form';

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="mb-3">
        <h1>Welcome to Video Review</h1>
      </div>
      <div className="card col-4 shadow">
        <div className="card-body">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
