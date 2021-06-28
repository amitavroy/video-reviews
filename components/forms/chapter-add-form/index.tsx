import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { ChapterCreateSchema } from '../../../schemas/chapter.schema';
import ChapterService from '../../../services/chapter.service';
import { ValidationMessage } from '../../validation-message';
import FormLabel from '../labels';

interface Props {
  courseId: number;
  addNewChapter: (chapter) => void;
}

const ChapterAddForm: React.FC<Props> = ({ courseId, addNewChapter }) => {
  const handleSubmit = async (values, formikHelpers: FormikHelpers<any>) => {
    values.course_id = courseId;
    const resp = await ChapterService.saveChapter(values);
    resp.status === 201 && addNewChapter(resp.data.data);
    formikHelpers.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ChapterCreateSchema}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className="mb-3">
            <FormLabel id="name" name="Chapter name" />
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Enter name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            <ValidationMessage name="name" />
          </div>

          <div className="mb-3">
            <FormLabel id="description" name="Add chapter description" />
            <textarea
              className="form-control"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            <ValidationMessage name="description" />
          </div>

          <div className="mb-3">
            <button className="btn btn-success mr-3">Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ChapterAddForm;
