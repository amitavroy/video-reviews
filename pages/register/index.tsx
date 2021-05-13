import Card from '../../components/card';
import RegistrationForm from '../../components/forms/registration-form';

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="mb-3">
        <h1>Video Review</h1>
      </div>
      <Card>
        <RegistrationForm />
      </Card>
    </div>
  );
};
export default RegisterPage;
