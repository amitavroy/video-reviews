import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import React from 'react';
import { RegistrationSchema } from '../../../schemas/registration.schema';

const RegistrationForm = () => {
  const handleSubmit = (values, formikHelpers: FormikHelpers<any>) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={{
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
              {errors.email && touched.email ? (
                <div className="validation-error">{errors.email}</div>
              ) : null}
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
              {errors.password && touched.password ? (
                <div className="validation-error">{errors.password}</div>
              ) : null}
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
              {errors.confirm && touched.confirm ? (
                <div className="validation-error">{errors.confirm}</div>
              ) : null}
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
