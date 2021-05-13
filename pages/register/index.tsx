import RegistrationForm from '../../components/forms/registration-form';

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card col-4 shadow">
        <div className="card-header">Create an account</div>
        <div className="card-body">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
