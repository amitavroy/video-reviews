import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';

import { LoginSchema } from '../../../schemas/login.schema';
import AuthService from '../../../services/auth.service';
import { ValidationMessage } from '../../validation-message';

export const LoginForm = () => {
  const handleLogin = async (values, formikHelpers: FormikHelpers<any>) => {
    const { email, password } = values;
    await AuthService.handleLogin(email, password);
  };
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleLogin}
        validationSchema={LoginSchema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
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
              <div className="mt-2 mb-4 text-end">
                <a href="#">Forgot password</a>
              </div>
            </div>
            <div className="mb-3">
              <span className="me-3">
                <button className="btn btn-success mr-3">Login</button>
              </span>
              <span className="me-3">
                <Link href="/register">
                  <a className="btn btn-outline-primary mr-3">Register</a>
                </Link>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
