import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { setFormikErrors } from '../../../lib/utils/helper';
import { StoryCreateSchema } from '../../../schemas/story.schema';
import CourseService from '../../../services/course.service';
import { ValidationMessage } from '../../validation-message';
import FormLabel from '../labels';

const CourseAddForm = () => {
  const router = useRouter();
  const handleSubmit = async (values, formikHelpers: FormikHelpers<any>) => {
    const resp = await CourseService.saveCourse(values);
    if (resp && resp.status === 422) {
      setFormikErrors(resp.data.errors, formikHelpers.setFieldError);
    }
    if (resp.status === 201) {
      formikHelpers.resetForm();
      router.push('/dashboard');
    }
  };
  return (
    <React.Fragment>
      <h3>Add a new Course</h3>
      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={StoryCreateSchema}
      >
        {({ values, handleBlur, handleChange }) => (
          <Form>
            <div className="mb-3">
              <FormLabel id="name" name="Course name" />
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Enter course name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              <ValidationMessage name="name" />
            </div>
            <div className="mb-3">
              <FormLabel id="description" name="Course description" />
              <textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              ></textarea>
              <ValidationMessage name="description" />
            </div>
            <div className="mb-3">
              <span className="me-3">
                <button className="btn btn-success mr-3">Save</button>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default CourseAddForm;
