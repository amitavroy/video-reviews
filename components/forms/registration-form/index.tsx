import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RegistrationSchema } from '../../../schemas/registration.schema';
import UserService from '../../../services/user.service';
import { ValidationMessage } from '../../validation-message';

const RegistrationForm = () => {
  const router = useRouter();
  const handleSubmit = async (values, formikHelpers: FormikHelpers<any>) => {
    const resp = await UserService.createUser(values);
    resp === true && router.push('/login');
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              <ValidationMessage name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter your email address"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              <ValidationMessage name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                className="form-control"
              />
              <ValidationMessage name="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirm"
                value={values.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password again"
                className="form-control"
              />
              <ValidationMessage name="confirm" />
            </div>
            <div className="mb-3">
              <span className="me-3">
                <button className="btn btn-success mr-3">Register</button>
              </span>
              <Link href="/login">
                <a>I already have an account</a>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
export default RegistrationForm;
