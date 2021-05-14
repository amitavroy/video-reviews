import Head from 'next/head';
import React from 'react';
import Card from '../../components/card';
import RegistrationForm from '../../components/forms/registration-form';

const pageTitle =
  'A application build during the tutorial series | View review';

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="mb-3">
          <h1>Video Review</h1>
        </div>
        <Card>
          <RegistrationForm />
        </Card>
      </div>
    </React.Fragment>
  );
};
export default RegisterPage;
